<!-- Aggiungo una texture per il pavimento e le pareti del secondo corridoio -->

/* Creo un piano per il pavimento */
var shape_floor = new THREE.Shape();
shape_floor.moveTo(.170,0);
shape_floor.lineTo(.290,0);
shape_floor.lineTo(.290,.390);
shape_floor.lineTo(0,.390);
shape_floor.lineTo(0,.230);
shape_floor.lineTo(.170,.230);
shape_floor.lineTo(.170,0);

var floor = createMesh(new THREE.ShapeGeometry(shape_floor), "laminato.jpg", "laminato.jpg", true, 5, 2);
floor.scale.set(1000,1000,1);
floor.position.set(600,150,40.5)
house.add(floor);


// Muro nord del corridoio
var shape_nord = new THREE.Shape();
shape_nord.moveTo(0,0);
shape_nord.lineTo(.020,0);
shape_nord.lineTo(.020,.210);
shape_nord.lineTo(.100,.210);
shape_nord.lineTo(.100,0);
shape_nord.lineTo(.290,0);
shape_nord.lineTo(.290,.310);
shape_nord.lineTo(0,.310);
shape_nord.lineTo(0,0);

var wall_Nord = createMesh(new THREE.ShapeGeometry(shape_nord), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
wall_Nord.scale.set(1000,1000,1);
wall_Nord.rotation.x = Math.PI/2;
wall_Nord.position.set(600,539.5,40)
house.add(wall_Nord);


// Muro est del corridoio
var shape_est = new THREE.Shape();
shape_est.moveTo(0,0);
shape_est.lineTo(.300,0);
shape_est.lineTo(.300,.210);
shape_est.lineTo(.380,.210);
shape_est.lineTo(.380,0);
shape_est.lineTo(.390,0);
shape_est.lineTo(.390,.310);
shape_est.lineTo(0,.310);
shape_est.lineTo(0,0);

var wall_Est = createMesh(new THREE.ShapeGeometry(shape_est), "corridoio.jpg", "corridoio.jpg", true, 1,1);
wall_Est.scale.set(1000,1000,1);
wall_Est.rotation.x = Math.PI/2;
wall_Est.rotation.y = -Math.PI/2;
wall_Est.position.set(889.5,540,40)
house.add(wall_Est);


// Muro sud del corridoio
var shape_sud = new THREE.Shape();
shape_sud.moveTo(0,0);
shape_sud.lineTo(.010,0);
shape_sud.lineTo(.010,.210);
shape_sud.lineTo(.090,.210);
shape_sud.lineTo(.090,0);
shape_sud.lineTo(.120,0);
shape_sud.lineTo(.120,.310);
shape_sud.lineTo(0,.310);
shape_sud.lineTo(0,0);

var wall_Sud1 = createMesh(new THREE.ShapeGeometry(shape_sud), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
wall_Sud1.scale.set(1000,1000,1);
wall_Sud1.rotation.x = Math.PI/2;
wall_Sud1.rotation.y = Math.PI;
wall_Sud1.position.set(889.5,150.5,40)
house.add(wall_Sud1);


// Muro sud del corridoio
var wall_Sud2 = createMesh(new THREE.PlaneGeometry(170,310), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
wall_Sud2.rotation.x = -Math.PI/2;
wall_Sud2.position.set(685,380.5,195);
house.add(wall_Sud2);




// Muro ovest del corridoio
var wall_West1 = createMesh(new THREE.PlaneGeometry(160,310), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
wall_West1.rotation.x = Math.PI/2;
wall_West1.rotation.y = Math.PI/2;
wall_West1.position.set(600.5,460,195)
house.add(wall_West1);

// Muro ovest del corridoio
var wall_West2 = createMesh(new THREE.PlaneGeometry(230,310), "corridoio.jpg", "corridoio.jpg", true, 1, 1);
wall_West2.rotation.x = Math.PI/2;
wall_West2.rotation.y = Math.PI/2;
wall_West2.position.set(770.5,265,195)
house.add(wall_West2);