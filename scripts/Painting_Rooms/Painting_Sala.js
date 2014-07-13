<!-- Aggiungo una texture per il pavimento e le pareti della sala da pranzo -->

/* Creo un piano per il pavimento */
var floor = createMesh(new THREE.PlaneGeometry(420,435), "laminato.jpg", "laminato.jpg",true, 4, 6);    
floor.position.set(800,-77.5,40.5);
house.add(floor);


// Muro nord della sala da pranzo
var shape_nord = new THREE.Shape();
shape_nord.moveTo(0,0);
shape_nord.lineTo(.200,0);
shape_nord.lineTo(.200,.210);
shape_nord.lineTo(.280,.210);
shape_nord.lineTo(.280,0);
shape_nord.lineTo(.420,0);
shape_nord.lineTo(.420,.310);
shape_nord.lineTo(0,.310);
shape_nord.lineTo(0,0);

var wall_Nord = createMesh(new THREE.ShapeGeometry(shape_nord), "blue_wall.jpg", "blue_wall.jpg", true, 1, 5);
wall_Nord.scale.set(1000,1000,1);
wall_Nord.rotation.x = Math.PI/2; 
wall_Nord.position.set(590,139.5,40);
house.add(wall_Nord);


// Muro ovest della sala da pranzo
var shape_West = new THREE.Shape();
shape_West.moveTo(0,0);
shape_West.lineTo(.325,0);
shape_West.lineTo(.325,.210);
shape_West.lineTo(.405,.210);
shape_West.lineTo(.405,0);
shape_West.lineTo(.435,0);
shape_West.lineTo(.435,.310);
shape_West.lineTo(0,.310);
shape_West.lineTo(0,0);

var wall_West = createMesh(new THREE.ShapeGeometry(shape_West), "blue_wall.jpg", "blue_wall.jpg", true, 2, 5);
wall_West.scale.set(1000,1000,1);
wall_West.rotation.x = Math.PI/2; 
wall_West.rotation.y = Math.PI/2;
wall_West.position.set(590.5,-294,40);
house.add(wall_West);


// Muro sud della sala da pranzo
var shape_Sud = new THREE.Shape();
shape_Sud.moveTo(0,0);
shape_Sud.lineTo(.110,0)
shape_Sud.lineTo(.110,.225);
shape_Sud.lineTo(.330,.225);
shape_Sud.lineTo(.330,0);
shape_Sud.lineTo(.420,0);
shape_Sud.lineTo(.420,.310);
shape_Sud.lineTo(0,.310);
shape_Sud.lineTo(0,0);

var wall_Sud = createMesh(new THREE.ShapeGeometry(shape_Sud), "blue_wall.jpg");
wall_Sud.scale.set(1000,1000,1);
wall_Sud.rotation.x = Math.PI/2;
wall_Sud.rotation.y = Math.PI;
wall_Sud.position.set(1010,-294.5,40);
house.add(wall_Sud);


// Muro est della sala da pranzo
var shape_Est = new THREE.Shape();
shape_Est.moveTo(0,0);
shape_Est.lineTo(.110,0)
shape_Est.lineTo(.110,.225);
shape_Est.lineTo(.330,.225);
shape_Est.lineTo(.330,0);
shape_Est.lineTo(.435,0);
shape_Est.lineTo(.435,.310);
shape_Est.lineTo(0,.310);
shape_Est.lineTo(0,0);

var wall_Est = createMesh(new THREE.ShapeGeometry(shape_Est), "blue_wall.jpg", "blue_wall.jpg", true, 2, 5);
wall_Est.scale.set(1000,1000,1);
wall_Est.rotation.x = Math.PI/2;
wall_Est.rotation.y = -Math.PI/2;
wall_Est.position.set(1009.5,140, 40);
house.add(wall_Est);


// Muri sotto le finestre
var window_Sud = createMesh(new THREE.PlaneGeometry(140,95), "blue_wall.jpg");
window_Sud.rotation.x = -Math.PI/2;
window_Sud.position.set(830,-324.5,87.5);
house.add(window_Sud);

var window_Est = createMesh(new THREE.PlaneGeometry(140,95), "blue_wall.jpg");
window_Est.rotation.x = -Math.PI/2;
window_Est.rotation.y = -Math.PI/2;
window_Est.position.set(1039.5,-114.5,87.5);
house.add(window_Est);


// Marmo dei balconi e porte
var door1_marble = createMesh(new THREE.PlaneGeometry(10,80), "marble.jpg");
door1_marble.position.set(585,75,40.5)
house.add(door1_marble);

var door2_marble = createMesh(new THREE.PlaneGeometry(85,10), "marble.jpg");
door2_marble.position.set(838,145,40.5)
house.add(door2_marble);


var balcony1_marble = createMesh(new THREE.PlaneGeometry(220,40), "marble.jpg");
balcony1_marble.position.set(790,-315,40.5)
house.add(balcony1_marble);

var balcony2_marble = createMesh(new THREE.PlaneGeometry(40,220), "marble.jpg");
balcony2_marble.position.set(1030,-80,40.5)
house.add(balcony2_marble);