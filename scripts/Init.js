var controls;
var FPenabled = false;

function init() {
	scene = new THREE.Scene();

	clock = new THREE.Clock();


	// aggiungo 2 luci direzionali alla scena
	var light = new THREE.DirectionalLight(0xffffff);
		light.position.set(0, 1400, -1500);
		light.intensity = 2;
		scene.add(light);

	var light2 = new THREE.DirectionalLight(0xffffff);
		light2.position.set(0, 1400, 1500);
		light2.intensity = 0.5;
		scene.add(light2);




	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	camera.up = new THREE.Vector3(0, 1, 0);
	camera.position.set(100, 60, 100);

	// camera del tosaerba
	var tosaErba_camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10000);

	renderCamera = camera;
	scene.add(renderCamera);


	trackballControls = new THREE.TrackballControls(camera);

	var broke_display = makeBrokeDisplay();
	house = new THREE.Object3D();
	var esternalLights = makeEsternalLights();
	var tosaErba = new THREE.Object3D();
		tosaErba.add(tosaErba_camera);
	makeTosaErba(tosaErba);

	var tetto = makeRoof();

	makeHouse(house); // carico la struttura portante della casa
	insertDoors(house); // inserisco le porte 
	insertFixtures(house); // inserisco finestre e balconi
	insertInternalLights(house); // aggiungo le luci interne
	insertModels(house); // inserisco i modelli d'arredo
	insertAudioVideoAnimation(house); // aggiungo le animazioni audio-video
	paintingHouse(house); // aggiungo le texture a pavimenti e pareti
	
	house.add(esternalLights);
	house.add(tosaErba);
	house.add(makeGrass());

	
	house.rotation.x = -Math.PI/2;
	house.position.set(0, -100, 0);
	house.scale.set(0.6,0.6,0.6);
	scene.add(house);

	// Sfere energetiche
	var engineSx = new ParticleEngine();
	engineSx.setValues( Examples.candleSx );			
	engineSx.initialize();
	engineSx.destroy();

	var engineDx = new ParticleEngine();
	engineDx.setValues( Examples.candleDx );  			
	engineDx.initialize();
	engineDx.destroy();


	var daySkybox = makeSkyBox("oasisday_");
	var nightSkybox = makeSkyBox("oasisnight_");
	scene.add(daySkybox);

	
      
	rayCaster = new THREE.Raycaster();
	rayCaster.ray.direction.set(0, -1, 0);
	projector = new THREE.Projector();
	function onDocumentMouseDown(event) {
		event.preventDefault();
		if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
			var vector = new THREE.Vector3(0, 0, 2);
			projector.unprojectVector(vector, renderCamera);
			var raycaster = new THREE.Raycaster(vector, controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
		} else {
			var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
			projector.unprojectVector(vector, renderCamera);

			var raycaster = new THREE.Raycaster(renderCamera.position, vector.sub(renderCamera.position).normalize());
			var intersects = raycaster.intersectObjects(toIntersect);
		}
		var intersects = raycaster.intersectObjects(toIntersect);
		if (intersects.length > 0) {
			intersects[0].object.interact && intersects[0].object.interact();
		}
	}
	document.addEventListener('mousedown', onDocumentMouseDown, false);


	var controlGUI = new function() {
		this.FPS = startFPS;
		this.enableTrackball = true;
		this.night = false;
		this.roof = false;
		this.TosaErba_Camera = false;
		this.tosaErba = function() {
			tosaErba.animate();
		}
		this.Goku = function() {
		if (broke_display.notVisible) {
			broke_display.notVisible = false;
			engineSx = new ParticleEngine();
			engineSx.setValues( Examples.candleSx );			
			engineSx.initialize();

			engineDx = new ParticleEngine();
			engineDx.setValues( Examples.candleDx );  			
			engineDx.initialize();

			var sfera = createMesh(new THREE.SphereGeometry( 100, 64, 64 ), "lava.jpg", "lava_bump.jpg", true, 5, 5);
			sfera.scale.set(0.001, 0.001, 0.001);
			sfera.position.set(370 , 20, -170);			
			console.log(sfera.position);
			console.log(camera.position);
			var lanciaSfera = new TWEEN.Tween(sfera.position)
				.to({x: renderCamera.position.x,
					 y: renderCamera.position.y,
					 z: renderCamera.position.z}, 2500)
				.onComplete(function() {
					renderCamera.add(broke_display);
					scene.remove(sfera);
					glass_audio.play(); 
				})
				.delay(200)

			var routaSfera = new TWEEN.Tween(sfera.rotation)
				.to({x: 2*Math.PI,
					 y: 2*Math.PI,
					 z: 2*Math.PI}, 500)
				.repeat(5)

			var creaSfera = new TWEEN.Tween(sfera.scale)
				.to({x: 1, y: 1,  z: 1}, 2000)
				.onComplete(function(){
					engineDx.destroy();
					engineSx.destroy();
				})
			.chain(lanciaSfera,routaSfera)

			setTimeout( function() { scene.add(sfera); creaSfera.start(); kamehameha_audio.play() } , 1500);
			ripara = gui.add(controlGUI,"Ripara_Schermo");
			}	
		};
		this.Ripara_Schermo = function() {
			if (!broke_display.notVisible) {
				renderCamera.remove(broke_display);
				broke_display.notVisible = true;
				gui.remove(ripara);
			}				
		};
	};

	var gui = new dat.GUI();
	gui.add(controlGUI, "FPS");
	gui.add(controlGUI, "enableTrackball");
	gui.add(controlGUI, "night").onChange( function (e) {
		if (e) {
			scene.remove(daySkybox);
			esternalLights.accendi();
			scene.remove(light); scene.remove(light2);
			scene.add(nightSkybox);
		} else {
			scene.remove(nightSkybox);
			scene.add(daySkybox);
			scene.add(light); scene.add(light2);
			esternalLights.spegni();
		}
	});
	gui.add(controlGUI,"roof").onChange(function (e) {
		e ? house.add(tetto) : house.remove(tetto)
	});
	gui.add(controlGUI,"tosaErba");
	gui.add(controlGUI,"TosaErba_Camera").onChange(function (e) {
		renderCamera = e ? tosaErba_camera : camera;
	});
	gui.add(controlGUI,"Goku");
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	render();

	function render() {
		
		TWEEN.update();

		if (controlGUI.enableTrackball) {
			trackballControls.update();
		}

		// first person controls
		if (FPenabled === true) {
			computeFPControls();
		}

		var delta = clock.getDelta();
			engineSx.update( delta * 0.5 ); 
			engineDx.update( delta * 0.5 ); 

		// update audio of video
		if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
			videoImageContext.drawImage( video, 0, 0 );
			if ( videoTexture ) 
			videoTexture.needsUpdate = true;
			video.updateVolume();
		}

		if ( video1.readyState === video1.HAVE_ENOUGH_DATA ) {
			videoImageContext1.drawImage( video1, 0, 0 );
			if ( videoTexture1 ) 
			videoTexture1.needsUpdate = true;
			video1.updateVolume();
		}

		if ( video2.readyState === video2.HAVE_ENOUGH_DATA ) {
			videoImageContext2.drawImage( video2, 0, 0 );
			if ( videoTexture2 ) 
			videoTexture2.needsUpdate = true;
			video2.updateVolume();
		}

		if ( video3.readyState === video3.HAVE_ENOUGH_DATA ) {
			videoImageContext3.drawImage( video3, 0, 0 );
			if ( videoTexture3 ) 
			videoTexture3.needsUpdate = true;
			video3.updateVolume();
		}

		if(window.location.pointLock) {
			controlsFPS.update();
			computeFPControls();
		}

		// update audio 
		brano_audio1.updateVolume();
		brano_audio2.updateVolume();
		brano_audio3.updateVolume();
		brano_audio4.updateVolume();
		brano_audio5.updateVolume();
		guitar_audio.updateVolume();

		requestAnimationFrame(render);
		renderer.render(scene, renderCamera);
	}

	window.addEventListener('resize', onWindowResize, false);
}


function onWindowResize() {
	renderCamera.aspect = window.innerWidth / window.innerHeight;
	renderCamera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}