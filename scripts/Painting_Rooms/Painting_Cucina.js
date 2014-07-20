<!-- Aggiungo una texture per il pavimento e le pareti della cucina -->

function paintingCucina (house) {

	/* Creo un piano per il pavimento */
	var floor = createMesh(new THREE.PlaneGeometry(270,390), "cucina.jpg", "cucina.jpg",true, 3, 5);    
	floor.position.set(1035,345,40.5);
	house.add(floor);


	// Muro nord della cucina
	var wall_Nord = createMesh(new THREE.PlaneGeometry(270,150), "bath.jpg", "bath.jpg", true, 6, 5);
	wall_Nord.rotation.x = Math.PI/2;
	wall_Nord.position.set(1035,539.5,115);
	house.add(wall_Nord);


	// Muro sud della cucina
	var wall_Sud = createMesh(new THREE.PlaneGeometry(270,150), "bath.jpg", "bath.jpg", true, 8, 5);
	wall_Sud.rotation.x = Math.PI/2;
	wall_Sud.rotation.y = Math.PI;
	wall_Sud.position.set(1035,150.5,115);
	house.add(wall_Sud);


	// Muro ovest della cucina
	var wall_West = createMesh(new THREE.PlaneGeometry(300,150), "bath.jpg", "bath.jpg", true, 6, 5);
	wall_West.rotation.x = Math.PI/2;
	wall_West.rotation.y = Math.PI/2;
	wall_West.position.set(900.5,390,115);
	house.add(wall_West);


	// Muro laterali della finestra
	var wall_Est1 = createMesh(new THREE.PlaneGeometry(70,150), "bath.jpg", "bath.jpg", true, 2, 5);
	wall_Est1.rotation.x = Math.PI/2;
	wall_Est1.rotation.y = -Math.PI/2;
	wall_Est1.position.set(1169.5,185,115);
	house.add(wall_Est1);

	var wall_Est2 = createMesh(new THREE.PlaneGeometry(100,150), "bath.jpg", "bath.jpg", true, 3, 5);
	wall_Est2.rotation.x = Math.PI/2;
	wall_Est2.rotation.y = -Math.PI/2;
	wall_Est2.position.set(1169.5,490,115);
	house.add(wall_Est2);


	// muretto sotto la finestra
	var window_base = createMesh(new THREE.PlaneGeometry(220,95), "bath.jpg", "bath.jpg", true, 5, 4);;
	window_base.rotation.x = Math.PI/2;
	window_base.rotation.y = -Math.PI/2;
	window_base.position.set(1199.5,330,87.5);
	house.add(window_base);


	// marmo di finestra e porta
	var window_marble = createMesh(new THREE.PlaneGeometry(220,30), "marble.jpg");
	window_marble.rotation.z = Math.PI/2;
	window_marble.position.set(1185,330.5,40.5);
	house.add(window_marble);

	var door_marble = createMesh(new THREE.PlaneGeometry(10,80), "marble.jpg");
	window_marble.rotation.z = Math.PI/2;
	door_marble.position.set(895,200,40.5);
	house.add(door_marble);
}	