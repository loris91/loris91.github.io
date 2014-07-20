<!-- Aggiungo una texture per il pavimento e le pareti della camera -->

function paintingCamera (house) {

	/* Creo un piano per il pavimento */
	var floor = createMesh(new THREE.PlaneGeometry(400,430), "laminato.jpg", "laminato.jpg",true, 2, 4);    
	floor.position.set(380,-215,40.5);
	house.add(floor);

	// Muro nord della camera
	var shape_nord = new THREE.Shape();
	shape_nord.moveTo(0,0);
	shape_nord.lineTo(.205,0);
	shape_nord.lineTo(.205,.210);
	shape_nord.lineTo(.320,.210);
	shape_nord.lineTo(.320,0);
	shape_nord.lineTo(.400,0);
	shape_nord.lineTo(.400,.310);
	shape_nord.lineTo(0,.310);
	shape_nord.lineTo(0,0);

	var wall_Nord = createMesh(new THREE.ShapeGeometry(shape_nord), "bedroom.jpg", "bedroom.jpg", true, 1, 1);
	wall_Nord.scale.set(1000,1000,1);
	wall_Nord.rotation.x = Math.PI/2;
	wall_Nord.position.set(180,-.5,40)
	house.add(wall_Nord);


	// Muro est della camera
	var wall_Est = createMesh(new THREE.PlaneGeometry(430,310), "bedroom.jpg", "bedroom.jpg", true, 1, 1);
	wall_Est.rotation.x = Math.PI/2;
	wall_Est.rotation.y = -Math.PI/2;
	wall_Est.position.set(579.5,-215,195)
	house.add(wall_Est);


	// Muro sud della camera
	var shape_sud = new THREE.Shape();
	shape_sud.moveTo(0,0);
	shape_sud.lineTo(.11,0);
	shape_sud.lineTo(.11,.225);
	shape_sud.lineTo(.33,.225);
	shape_sud.lineTo(.33,0);
	shape_sud.lineTo(.4,0);
	shape_sud.lineTo(.4,.310);
	shape_sud.lineTo(0,.310);
	shape_sud.lineTo(0,0);

	var wall_Sud = createMesh(new THREE.ShapeGeometry(shape_sud), "bedroom.jpg", "bedroom.jpg", true, 1, 1);
	wall_Sud.scale.set(1000,1000,1);
	wall_Sud.rotation.x = Math.PI/2;
	wall_Sud.rotation.y = Math.PI;
	wall_Sud.position.set(580,-429.5,40)
	house.add(wall_Sud);


	// Muro ovest della camera
	var wall_West = createMesh(new THREE.PlaneGeometry(430,310), "bedroom.jpg", "bedroom.jpg", true, 1, 1);
	wall_West.rotation.x = Math.PI/2;
	wall_West.rotation.y = Math.PI/2;
	wall_West.position.set(180.5,-215,195)
	house.add(wall_West);



	// muro della finestra
	var window_dx = createMesh(new THREE.PlaneGeometry(30,225), "bedroom.jpg");
	window_dx.rotation.x = Math.PI/2;
	window_dx.rotation.y = Math.PI/2;
	window_dx.position.set(250.5,-445,152.5);
	house.add(window_dx);

	var window_sx = createMesh(new THREE.PlaneGeometry(30,225), "bedroom.jpg");
	window_sx.rotation.x = Math.PI/2;
	window_sx.rotation.y = -Math.PI/2;
	window_sx.position.set(469.5,-445,152.5);
	house.add(window_sx);

	var window_base = createMesh(new THREE.PlaneGeometry(220,95), "bedroom.jpg");
	window_base.rotation.x = Math.PI/2;
	window_base.rotation.y = Math.PI;
	window_base.position.set(359.5,-459.5,87.5);
	house.add(window_base);



	// marmo di finestra e porta
	var window_marble = createMesh(new THREE.PlaneGeometry(220,30), "marble.jpg");
	window_marble.position.set(359.5,-444.5,40.5)
	house.add(window_marble);

	var door_marble = createMesh(new THREE.PlaneGeometry(115,10), "marble.jpg");
	door_marble.position.set(443,5,40.5)
	house.add(door_marble);
}