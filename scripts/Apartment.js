/* Aggiungo il corridoio principale */
	makeRoom('assets/rooms/corridoio_1.obj',function(mesh) {
	house.add(mesh);
});

/* Aggiungo la cameretta */
	makeRoom('assets/rooms/cameretta.obj',function(mesh) {
	mesh.position.set(-315,-330,0);
	house.add(mesh);
});


/* Aggiungo il bagno */
	makeRoom('assets/rooms/bagno.obj',function(mesh) {
	mesh.position.set(0,-330,0);
	house.add(mesh);
});

/* Aggiungo la camera da letto */
	makeRoom('assets/rooms/camera_da_letto.obj',function(mesh) {
	mesh.position.set(170,-470,0);
	house.add(mesh);
});

/* Aggiungo la sala da pranzo */
	makeRoom('assets/rooms/sala.obj',function(mesh) {
	mesh.position.set(580,-335,0);
	house.add(mesh);
});

/* Aggiungo il secondo corridoio */
	makeRoom('assets/rooms/corridoio_2.obj',function(mesh) {
	mesh.position.set(590,140,0);
	house.add(mesh);
});

/* Aggiungo la cucina */
	makeRoom('assets/rooms/cucina.obj',function(mesh) {
	mesh.position.set(890,140,0);
	house.add(mesh);
});

/* Aggiungo il salotto */
	makeRoom('assets/rooms/salotto.obj',function(mesh) {
	mesh.position.set(590,540,0);
	house.add(mesh);
});

/* Aggiungo il tetto */
	var shape = new THREE.Shape();
		shape.moveTo(0,0);
		shape.lineTo(.1600,0);
		shape.lineTo(.1600,.1500);
		shape.lineTo(.0830,.1500);
		shape.lineTo(.0830,.0650);
		shape.lineTo(0,.0650);
		shape.lineTo(0,0);
	var option = {
		amount: 40,
		bevelThickness: 10,
		curveSegments: 30,
		steps: 100,
		bevelEnabled: false
	};

	var tetto = createMesh(new THREE.ExtrudeGeometry(shape,option), 
		'tetto.jpg','tetto_bump.jpg', true, 50, 25);
	tetto.scale.set(10000,10000,1);
	tetto.position.set (-345,-500,350);


/* Aggiungo il balcone della cameretta */
	var shape = new THREE.Shape();
		shape.moveTo(0,0);
		shape.lineTo(.485,0);
		shape.lineTo(.485,.140);
		shape.lineTo(0,.140);
		shape.lineTo(0,0);
	var balcony1 = createMesh(new THREE.ExtrudeGeometry(shape,option),
		'piastrelle.jpg', 'piastrelle_bump.jpg', true, 10, 10);
	balcony1.scale.set(1000,1000,1);
	balcony1.position.set(-315,-470,0);
	house.add(balcony1);

/* Aggiungo il balcone della sala */
	var shape = new THREE.Shape();
		shape.moveTo(0,0);
		shape.lineTo(.620,0);
		shape.lineTo(.620,.610);
		shape.lineTo(.460,.610);
		shape.lineTo(.460,.140);
		shape.lineTo(0,.140);
		shape.lineTo(0,0);
	var balcony2 = createMesh(new THREE.ExtrudeGeometry(shape,option),
		'piastrelle.jpg', 'piastrelle_bump.jpg', true, 10, 10);
	balcony2.scale.set(1000,1000,1);
	balcony2.position.set(590,-470,0);
	house.add(balcony2);

/* Aggiungo il balcone del salotto */
	var shape = new THREE.Shape();
		shape.moveTo(0,0);
		shape.lineTo(.150,0);
		shape.lineTo(.150,.410);
		shape.lineTo(0,.410);
		shape.lineTo(0,0);
	var balcony3 = createMesh(new THREE.ExtrudeGeometry(shape,option),
		'piastrelle.jpg', 'piastrelle_bump.jpg', true, 10, 10);
	balcony3.scale.set(1000,1000,1);
	balcony3.position.set(1060,550,0);
	house.add(balcony3);