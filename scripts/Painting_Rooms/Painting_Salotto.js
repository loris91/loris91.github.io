<!-- Aggiungo una texture per il pavimento e le pareti del salotto -->

/* Creo un piano per il pavimento */
var floor = createMesh(new THREE.PlaneGeometry(420,400), "parquet.jpg", "parquet.jpg",true, 6, 6);    
floor.position.set(810,750,40.5);
house.add(floor);


// Muro nord del salotto
var wall_Nord = createMesh(new THREE.PlaneGeometry(420,310), "blue_wall.jpg");
wall_Nord.rotation.x = Math.PI/2;
wall_Nord.position.set(810,949.5,195);
house.add(wall_Nord);

// Muro est del corridoio
var shape_Est = new THREE.Shape();
shape_Est.moveTo(0,0);
shape_Est.moveTo(.030,0);
shape_Est.moveTo(.030,.225);
shape_Est.moveTo(.100,.225);
shape_Est.moveTo(.100,0);
shape_Est.moveTo(.280,0);
shape_Est.moveTo(.280,.225);
shape_Est.moveTo(.360,.225);
shape_Est.moveTo(.360,0);
shape_Est.moveTo(.400,0);
shape_Est.moveTo(.400,.310);
shape_Est.moveTo(0,.310);
shape_Est.moveTo(0,0);

var wall_Est = createMesh(new THREE.ShapeGeometry(shape_Est), "blue_wall.jpg");
wall_Est.scale.set(1000,1000,1);
wall_Est.rotation.x = Math.PI/2;
wall_Est.rotation.y = -Math.PI/2;
wall_Est.position.set(1019.5,949.5,40);
house.add(wall_Est);


// Muro sud del corridoio
var shape_sud = new THREE.Shape();
shape_sud.moveTo(0,0);
shape_sud.lineTo(.320,0);
shape_sud.lineTo(.320,.210);
shape_sud.lineTo(.400,.210);
shape_sud.lineTo(.400,0);
shape_sud.lineTo(.420,0);
shape_sud.lineTo(.420,.310);
shape_sud.lineTo(0,.310);
shape_sud.lineTo(0,0);

var wall_Sud = createMesh(new THREE.ShapeGeometry(shape_sud), "blue_wall.jpg");
wall_Sud.scale.set(1000,1000,1);
wall_Sud.rotation.x = Math.PI/2;
wall_Sud.rotation.y = Math.PI;
wall_Sud.position.set(1020,550.5,40)
house.add(wall_Sud);


// Muro ovest del salotto
var wall_West = createMesh(new THREE.PlaneGeometry(400,310), "blue_wall.jpg");
wall_West.rotation.x = Math.PI/2;
wall_West.rotation.y = Math.PI/2;
wall_West.position.set(600.5,750,195)
house.add(wall_West);


// muri della finestra
var window_dx = createMesh(new THREE.PlaneGeometry(30,225), "blue_wall.jpg");
window_dx.rotation.x = Math.PI/2;
window_dx.position.set(1035,919.5,122.5);
house.add(window_dx);

var window_sx = createMesh(new THREE.PlaneGeometry(30,225), "blue_wall.jpg");
window_sx.rotation.x = Math.PI/2;
window_sx.rotation.y = Math.PI;
window_sx.position.set(1035,850.5,122.5);
house.add(window_sx);

var window_base = createMesh(new THREE.PlaneGeometry(70,95), "blue_wall.jpg");
window_base.rotation.x = Math.PI/2;
window_base.rotation.y = -Math.PI/2;
window_base.position.set(1049.5,885,87.5);
house.add(window_base);



// marmo di finestra, balcone e porta
var window_marble = createMesh(new THREE.PlaneGeometry(30,70), "marble.jpg");
window_marble.position.set(1035,885,40.5)
house.add(window_marble);

var door_marble = createMesh(new THREE.PlaneGeometry(80,10), "marble.jpg");
door_marble.position.set(660,545,40.5)
house.add(door_marble);

var balcony_marble = createMesh(new THREE.PlaneGeometry(40,80), "marble.jpg");
balcony_marble.position.set(1040,630,40.5);
house.add(balcony_marble);