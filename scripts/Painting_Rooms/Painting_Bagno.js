<!-- Aggiungo una texture per il pavimento e le pareti del bagno -->

function paintingBagno (house) {

	/* Creo un piano per il pavimento */
	var floor = createMesh(new THREE.PlaneGeometry(160,290), "bath_floor.jpg", "bath_floor.jpg",true, 5, 10);    
	floor.position.set(90,-145,40.5);
	house.add(floor);


	// Muro nord del bagno
	var wall_Nord = createMesh(new THREE.PlaneGeometry(80,150), "bath.jpg", "bath.jpg", true, 2, 5);
	wall_Nord.rotation.x = Math.PI/2;
	wall_Nord.position.set(130,-.5,115);
	house.add(wall_Nord);


	// Muro est del bagno
	var wall_Est = createMesh(new THREE.PlaneGeometry(150,290), "bath.jpg", "bath.jpg", true, 5, 8);
	wall_Est.rotation.y = -Math.PI/2;
	wall_Est.position.set(169.5,-145,115);
	house.add(wall_Est);


	// Muro est del bagno
	var wall_Sud = createMesh(new THREE.PlaneGeometry(75,150), "bath.jpg", "bath.jpg", true, 3, 5);
	wall_Sud.rotation.x = Math.PI/2;
	wall_Sud.rotation.y = Math.PI;
	wall_Sud.position.set(133,-289.5,115)
	house.add(wall_Sud);


	// Muro ovest del bagno
	var wall_West = createMesh(new THREE.PlaneGeometry(150,290), "bath.jpg", "bath.jpg", true, 5, 8);
	wall_West.rotation.y = Math.PI/2;
	wall_West.position.set(10.5,-145,115)
	house.add(wall_West);


	// muro della finestra
	var window_dx = createMesh(new THREE.PlaneGeometry(30,150), "bath.jpg", "bath.jpg", true, 1, 3 );
	window_dx.rotation.x = Math.PI/2;
	window_dx.rotation.y = Math.PI/2;
	window_dx.position.set(25.5,-305.5,115)
	house.add(window_dx);

	var window_sx = createMesh(new THREE.PlaneGeometry(30,150), "bath.jpg", "bath.jpg", true, 1, 3 );
	window_sx.rotation.x = Math.PI/2;
	window_sx.rotation.y = -Math.PI/2;
	window_sx.position.set(94.5,-305.5,115)
	house.add(window_sx);

	var window_base = createMesh(new THREE.PlaneGeometry(75,95), "bath.jpg", "bath.jpg", true, 2, 3 );
	window_base.rotation.x = Math.PI/2;
	window_base.rotation.y = Math.PI;
	window_base.position.set(65,-321.5,87.5)
	house.add(window_base);


	// marmo di finestra e porta
	var window_marble = createMesh(new THREE.PlaneGeometry(75,30), "marble.jpg");
	window_marble.position.set(64,-305,40.5);
	house.add(window_marble);

	var door_marble = createMesh(new THREE.PlaneGeometry(75,10), "marble.jpg");
	door_marble.position.set(50,5,40.5);
	house.add(door_marble);
}	