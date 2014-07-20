<!-- Aggiungo una texture per il pavimento e le pareti del primo corridoio -->

function paintingCorridoio1 (house) {

	/* Creo un piano per il pavimento */
	var floor = createMesh(new THREE.PlaneGeometry(570,130), "laminato.jpg", "laminato.jpg",true, 5, 2);    
	floor.position.set(295,75,40.5);
	house.add(floor);


	// Muro nord del corridoio
	var shape_nord = new THREE.Shape();
	shape_nord.moveTo(0,0);
	shape_nord.lineTo(.330,0);
	shape_nord.lineTo(.330,.210);
	shape_nord.lineTo(.430,.210);
	shape_nord.lineTo(.430,0);
	shape_nord.lineTo(.570,0);
	shape_nord.lineTo(.570,.310);
	shape_nord.lineTo(0,.310);
	shape_nord.lineTo(0,0);

	var wall_Nord = createMesh(new THREE.ShapeGeometry(shape_nord), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
	wall_Nord.scale.set(1000,1000,1);
	wall_Nord.rotation.x = Math.PI/2;
	wall_Nord.position.set(10,139.5,40)
	house.add(wall_Nord);


	// Muro est del corridoio
	var shape_est = new THREE.Shape();
	shape_est.moveTo(0,0);
	shape_est.lineTo(.025,0);
	shape_est.lineTo(.025,.210);
	shape_est.lineTo(.105,.210);
	shape_est.lineTo(.105,0);
	shape_est.lineTo(.130,0);
	shape_est.lineTo(.130,.310);
	shape_est.lineTo(0,.310);
	shape_est.lineTo(0,0);

	var wall_Est = createMesh(new THREE.ShapeGeometry(shape_est), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
	wall_Est.scale.set(1000,1000,1);
	wall_Est.rotation.x = Math.PI/2;
	wall_Est.rotation.y = -Math.PI/2;
	wall_Est.position.set(579.5,140,40)
	house.add(wall_Est);


	// Muro est del corridoio
	var shape_sud = new THREE.Shape();
	shape_sud.moveTo(0,0);
	shape_sud.lineTo(.080,0);
	shape_sud.lineTo(.080,.210);
	shape_sud.lineTo(.195,.210);
	shape_sud.lineTo(.195,0);
	shape_sud.lineTo(.485,0);
	shape_sud.lineTo(.485,.210);
	shape_sud.lineTo(0.560,.210);
	shape_sud.lineTo(0.560,0);
	shape_sud.lineTo(.570,0);
	shape_sud.lineTo(.570,.310);
	shape_sud.lineTo(0,.310);
	shape_sud.lineTo(0,0);

	var wall_Sud = createMesh(new THREE.ShapeGeometry(shape_sud), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
	wall_Sud.scale.set(1000,1000,1);
	wall_Sud.rotation.x = Math.PI/2;
	wall_Sud.rotation.y = Math.PI;
	wall_Sud.position.set(580,10.5,40)
	house.add(wall_Sud);


	// Muro ovest del corridoio
	var shape_west = new THREE.Shape();
	shape_west.moveTo(0,0);
	shape_west.lineTo(.040,0);
	shape_west.lineTo(.040,.210);
	shape_west.lineTo(.120,.210);
	shape_west.lineTo(.120,0);
	shape_west.lineTo(.130,0);
	shape_west.lineTo(.130,.310);
	shape_west.lineTo(0,.310);
	shape_west.lineTo(0,0);

	var wall_West = createMesh(new THREE.ShapeGeometry(shape_west), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
	wall_West.scale.set(1000,1000,1);
	wall_West.rotation.x = Math.PI/2;
	wall_West.rotation.y = Math.PI/2;
	wall_West.position.set(10.5,10,40)
	house.add(wall_West);
}	