var stats = initStats();

// creazione della scena
var scene = new THREE.Scene();

// creazione della camera
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 50000);
	camera.position.set(1200,400,200);
	camera.up = new THREE.Vector3(0,0,1);
	camera.lookAt(scene.position);

// creazione della camera del tosaerba
var tosaErba_camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

// creo una variabile in cui inserisco la camera da renderizzare 
var renderCamera = camera;

// aggiunta del trackball controls
var trackballControls = new THREE.TrackballControls(camera);

// creazione del renderer
var webGLRenderer = new THREE.WebGLRenderer();
	webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
	webGLRenderer.setSize(window.innerWidth, window.innerHeight);

// aggiungo 4 luci direzionali alla scena
var light1 = new THREE.DirectionalLight(0xffffff);
	light1.position.set(5000, 5000, 1000);
	light1.intensity = 0.2;
	scene.add(light1);

var light2 = new THREE.DirectionalLight(0xffffff);
	light2.position.set(5000, -5000, 1000);
	light2.intensity = 0.2;
	scene.add(light2);

var light3 = new THREE.DirectionalLight(0xffffff);
	light3.position.set(-5000, -5000, 1000);
	light3.intensity = 0.2;
	scene.add(light3);

var light4 = new THREE.DirectionalLight(0xffffff);
	light4.position.set(-5000, 5000, 1000);
	light4.intensity = 0.2;
	scene.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff);
	light5.position.set(0, 0, 2000);
	light5.intensity = 0.2;
	scene.add(light5);

// add axis helper
var axisHelper = new THREE.AxisHelper(1000);
	scene.add(axisHelper); 

// array degli oggetti animati
var objects = [];


// aggiungo il componente principale per la scena
var house = new THREE.Object3D();
	scene.add(house);

// aggiungo una skybox
var skybox = makeSkyBox('oasisday_');
	scene.add(skybox);

// aggiungo il giardino
var garden = makeGrass();
	garden.position.z = 35;
	scene.add(garden);

//aggiungo le luci esterne
var esternalLights = makeEsternalLights();
	house.add(esternalLights);



// aggiungo un elemento alla casa
var tosaErba = new THREE.Object3D();
tosaErba.animate = function() {
	mower_audio.play();
	var goWest = new TWEEN.Tween(tosaErba.position)
		.to({ x: -1600}, 5000)
	var goSud = new TWEEN.Tween(tosaErba.position)
		.chain(goWest)
		.to({ y: -1400}, 5000)
	var goEst = new TWEEN.Tween(tosaErba.position)
		.chain(goSud)
		.to({ x: 1600}, 5000)
	var goNord = new TWEEN.Tween(tosaErba.position)
		.to({ y: 1400}, 5000)
		.chain(goEst)

	var turnleft4 = new TWEEN.Tween(tosaErba.rotation)
		.to({ z: -2*Math.PI}, 500)
		.delay(4100)
	var turnleft3 = new TWEEN.Tween(tosaErba.rotation)
		.to({ z: -1.5*Math.PI}, 500)
		.delay(4350)
		.chain(turnleft4)
	var turnleft2 = new TWEEN.Tween(tosaErba.rotation)
		.to({ z: -Math.PI}, 500)
		.delay(4500)
		.chain(turnleft3)
	var turnleft1 = new TWEEN.Tween(tosaErba.rotation)
		.to({ z: -Math.PI/2}, 500)
		.delay(4750)
		.chain(turnleft2)

	setTimeout( function(){ turnleft1.start(); goNord.start()}, 1500);
	setTimeout( function() { mower_audio.pause() } , 22300);	
};
house.add(tosaErba);





// Projector
var projector = new THREE.Projector();
	document.addEventListener('mousedown', onDocumentMouseDown, false);


/* Aggiungo i controlli della GUI */
var controls = new function() {
	this.Axis = true;
	this.Trackball = true;
	this.Roof = false;
	this.Day = true;
	this.TosaErba = function() {
		tosaErba.animate();
	}
	this.TosaErba_Camera = false;
}


var gui = new dat.GUI();

/* Gestisco i parametri della GUI */
var trackball_control = gui.add(controls,"Trackball");
	trackball_control.onChange(function (e) {
	    trackball_control.trackball = e;
	});

var roof_control = gui.add(controls,"Roof");
	roof_control.onChange(function (e) {
		e ? scene.add(tetto) : scene.remove(tetto)
	});

var axis_control = gui.add(controls,"Axis");
	axis_control.onChange(function (e) {
		e ? scene.add(axisHelper) : scene.remove(axisHelper)
	});

var day_control = gui.add(controls,"Day");
	day_control.onChange(function (e) {
		if (e) {
			scene.remove(skybox);
			esternalLights.spegni();
			skybox = makeSkyBox('oasisday_');
			scene.add(skybox);
		} else {
			scene.remove(skybox);
			esternalLights.accendi();
			skybox = makeSkyBox('oasisnight_');
			scene.add(skybox);
		}
	});

var cameraControl = gui.add(controls, 'TosaErba_Camera');
	cameraControl.onChange(function (value) {
		renderCamera = value ? tosaErba_camera : camera;
	});

	gui.add(controls,"TosaErba");

  
function initStats() {
	var stats = new Stats();
	stats.setMode(0); // 0: fps, 1: ms
	$('body').append(stats.domElement);
	return stats;
}

function onDocumentMouseDown(event) {
	event.preventDefault();

	// map viewport coordinates in ([-1,1], [-1,1], 0.5)
	var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
	projector.unprojectVector(vector, camera);

	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

	var intersects = raycaster.intersectObjects(objects);

	if (intersects.length > 0) {
		intersects[0].object.animate();
	}
}