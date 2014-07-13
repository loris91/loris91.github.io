var stats = initStats();

// creazione della scena
var scene = new THREE.Scene();

// creazione della camera
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 50000);
	camera.position.set(1200,400,200);
	camera.up = new THREE.Vector3(0,0,1);
	camera.lookAt(scene.position);

// aggiunta del trackball controls
var trackballControls = new THREE.TrackballControls(camera);

// creazione del renderer
var webGLRenderer = new THREE.WebGLRenderer();
	webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
	webGLRenderer.setSize(window.innerWidth, window.innerHeight);

// aggiungo 4 luci direzionali alla scena
var light1 = new THREE.DirectionalLight(0xffffff);
	light1.position.set(5000, 5000, 1000);
	light1.intensity = 0.5;
	scene.add(light1);

var light2 = new THREE.DirectionalLight(0xffffff);
	light2.position.set(5000, -5000, 1000);
	light2.intensity = 0.5;
	scene.add(light2);

var light3 = new THREE.DirectionalLight(0xffffff);
	light3.position.set(-5000, -5000, 1000);
	light3.intensity = 0.5;
	scene.add(light3);

var light4 = new THREE.DirectionalLight(0xffffff);
	light4.position.set(-5000, 5000, 1000);
	light4.intensity = 0.5;
	scene.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff);
	light4.position.set(0, 0, 1000);
	light4.intensity = 0.5;
	scene.add(light4);

// add axis helper
var axisHelper = new THREE.AxisHelper(1000);
	scene.add(axisHelper); 

// array degli oggetti animati
var objects = [];


// aggiungo il componente principale per la scena
var house = new THREE.Object3D();
	scene.add(house);

// aggiungo una skybox
/*
var skybox = makeSkyBox('oasisday_');
	scene.add(skybox);
*/


// Projector
var projector = new THREE.Projector();
	document.addEventListener('mousedown', onDocumentMouseDown, false);


/* Aggiungo i controlli della GUI */
var controls = new function() {
	this.Axis = true;
	this.Trackball = true;
	this.Roof = false;
	this.Day = true;
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
			skybox = makeSkyBox('oasisday_');
			scene.add(skybox);
		} else {
			scene.remove(skybox);
			skybox = makeSkyBox('oasisnight_');
			scene.add(skybox);
		}
	});

  
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