<!-- Aggiungo una texture per il pavimento e le pareti della cameretta -->

/* Creo un piano per il pavimento */
var floor = createMesh(new THREE.PlaneGeometry(275,430), "parquet.jpg", "parquet.jpg",true, 5, 10);    
floor.position.set(-138,-75,40.5);
house.add(floor);


// Muro est della cameretta
var shape_door = new THREE.Shape();
shape_door.moveTo(0,0);
shape_door.lineTo(.010,0);
shape_door.lineTo(.010,.210);
shape_door.lineTo(.090,.210);
shape_door.lineTo(.090,0);
shape_door.lineTo(.430,0);
shape_door.lineTo(.430,.310);
shape_door.lineTo(0,.310);
shape_door.lineTo(0,0);

var wall_Est = createMesh(new THREE.ShapeGeometry(shape_door), "yellow_wall.jpg", "yellow_wall.jpg", true, 1, 5);
wall_Est.scale.set(1000,1000,1);
wall_Est.rotation.x = 0.5*Math.PI;
wall_Est.rotation.y = -0.5*Math.PI;  
wall_Est.position.set(-0.2,140,40);
house.add(wall_Est);

// Muro nord della cameretta
var wall_Nord = createMesh(new THREE.PlaneGeometry(275,310), "yellow_wall.jpg", "yellow_wall.jpg", true, 1, 5);
wall_Nord.position.set(-135,139.5,195);
wall_Nord.rotation.x = Math.PI/2;
house.add(wall_Nord);


// muro ovest della cameretta
var wall_West = createMesh(new THREE.PlaneGeometry(310,430), "yellow_wall.jpg", "yellow_wall.jpg", true, 1, 5);
wall_West.rotation.y = 0.5*Math.PI;
wall_West.position.set(-274.5,-75,195);
house.add(wall_West);


// muro sud della cameretta
var shape_balcony = new THREE.Shape();
shape_balcony.moveTo(0,0);
shape_balcony.lineTo(.175,0);
shape_balcony.lineTo(.175,.225);
shape_balcony.lineTo(.255,.225);
shape_balcony.lineTo(.255,0);
shape_balcony.lineTo(.275,0);
shape_balcony.lineTo(.275,.310);
shape_balcony.lineTo(0,.310);
shape_balcony.lineTo(0,0);

var wall_Sud = createMesh(new THREE.ShapeGeometry(shape_balcony), "yellow_wall.jpg", "yellow_wall.jpg", true, 1, 5);
wall_Sud.scale.set(1000,1000,1)
wall_Sud.rotation.x = Math.PI/2;
wall_Sud.rotation.y = Math.PI;
wall_Sud.position.set(0,-289.5,40);
house.add(wall_Sud);


// blocchetto di marmo della porta
var door_marble = createMesh(new THREE.PlaneGeometry(10,80), "marble.jpg" );
door_marble.position.set(5,90,40.1);
house.add(door_marble);

// blocchetto di marmo del balcone
var balcony_marble = createMesh(new THREE.PlaneGeometry(80,40), "marble.jpg" );
balcony_marble.position.set(-215,-310,40.1)
house.add(balcony_marble);