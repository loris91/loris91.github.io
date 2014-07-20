function insertModels(house) {

	var box_material = new THREE.MeshLambertMaterial({ color: 0x0000ff, opacity: 0.0, transparent: true });

	///////////////////////////////
	/// Arredamento della cucina //
	///////////////////////////////
	loadModel('lavello', 1, 1085, 340, 40, 0);
	loadModel('singolo', 1, 955, 480, 40, 0);
	loadModel('cucina', 1, 1045, 480, 40, 0);
	loadModel('angolo', 1, 965, 325, 40, 0.5);
	loadModel('singolo', 1, 965, 345, 40, 0.5);
	loadModel('cassettiera', 1, 775, 415, 40, 0.5);
	loadModel('singolo', 1, 965, 265, 40, 0.5);
	loadModel('doppio', 1, 1105, 105, 40, 0.5);
	loadModel('mobilettoGrande', 1, 2035, 350, 40, 1);
	loadModel('fridge', 13, 1050, 180, 105, 1);
	loadModel('tavolo_cucina', 1, 1120, 330, 40, 1);
	loadModel('sedia_cucina', 1, 1155, 310, 40, 1);
	loadModel('sedia_cucina', 1, 1090, 310, 40, 1);
	loadModel('sedia_cucina', 1, 1090, 370, 40, 0);
	loadModel('sedia_cucina', 1, 1155, 370, 40, 0);
	loadModel('microwave', 1, 1080, 500, 60, 0.5);
	loadModel('coffee', .08, 840, 580, 140, 0.5);



	///////////////////////////////
	/// Arredamento del salotto ///
	///////////////////////////////
	loadModel('sofa1', 1, 700, 950, 40, 0);
	loadModel('sofa1', 1, 605, 650, 40, 0.5);
	loadModel('tavolo_salotto', 100, 730, 670, 40, 0.5);
	loadModel('portaTV_salotto', 1, 990, 760, 40, -0.5);
	loadModel('led_tv', 2.4 , 985, 760, 94, -0.5);
	loadModel('yuccaPlant', 1, 650, 900, 20, 0.5);



	/////////////////////////////
	/// Arredamento del bagno ///
	/////////////////////////////
	loadModel('vasca_bagno', 1, 170, -85, 40, -0.5);
	loadModel('lavatrice', 1, 45, -255, 83, 0.5);
	loadModel('lavandino_bagno', 1, 60, -385, 40, 0.5);
	loadModel('specchio_bagno', 1, 60, -385, 40, 0.5);
	loadModel('termosifone', 0.9, 60, -310, 40, 1);
	loadModel('water', 0.9, 143, -265, 40, -0.5);
	loadModel('bidet', 0.9, 143, -255, 40, -0.5);



	///////////////////////////////////
	/// Arredamento della cameretta ///
	///////////////////////////////////
	loadModel('desk', 1, -15, -290, 40, 1);
	loadModel('officeChair', 1, -475, -25, 163, 0);
	loadModel('libreria', 0.8, -215, -150, 200, -0.5);
	loadModel('electricGuitar', 1, -25, -20, 92, -0.5);
	loadModel('juniorBed', 1, -235, 40, 40, 0);
	loadModel('armadio_cameretta', 1, -235, -280, 45, 0.5);
	loadModel('throwPillow', 50, -230, -530, -130, 0.5);

	var poster = createMesh(new THREE.PlaneGeometry(100,180), "totti.jpg");
	poster.rotation.x = Math.PI/2;
	poster.position.set(-120,138,200);
	house.add(poster);

	var quadro_hwoarang = createMesh(new THREE.PlaneGeometry(80,80), "hwoarang.jpg", "hwoarang_bump.jpg");
	quadro_hwoarang.rotation.x = Math.PI/2;
	quadro_hwoarang.rotation.y = -Math.PI/2;
	quadro_hwoarang.position.set(-8,-10,230);
	house.add(quadro_hwoarang);


	//////////////////////////////////
	/// Arredamento sala da pranzo ///
	//////////////////////////////////
	loadModel('portaTV_salotto', .9, 945, 75, 40, -0.2);
	loadModel('tv', 40, 945, 75, 89, -0.2);
	loadModel('mobile_sala', 1, 595, -280, 40, 0.5);
	loadModel('tavolo_sala', 50, 850, -120, 78, 0.5);
	loadModel('sedia_sala', 35, 800, -190, 80, 0.5);
	loadModel('sedia_sala', 35, 800, -100, 80, 0.5);
	loadModel('sedia_sala', 35, 890, -190, 80, -0.5);
	loadModel('sedia_sala', 35, 890, -100, 80, -0.5);
	loadModel('mobile_acquario', 1, -10, -105, 40, 0);
	loadModel('remote', 4, 850, -90, 130, -0.7);
	loadModel('ficus', 2, 970, -250, 40, 0);

	var quadro_gruppo = createMesh(new THREE.PlaneGeometry(100,80), "quadro_gruppo.jpg", "quadro_bump.jpg");
	quadro_gruppo.rotation.x = Math.PI/2;
	quadro_gruppo.position.set(720,133,190);
	house.add(quadro_gruppo);


	


	////////////////////////////////
	/// Arredamento della camere ///
	////////////////////////////////
	loadModel('bed1', 1, 565, -250, 40, -0.5);
	loadModel('armadio', 1, 205, -250, 40, 0.5);
	loadModel('como', 1, 405, -485, 40, -0.5);
	loadModel('petitReveil', 5, 310, -30, 123, 0);

	


	///////////////////////////////
	/// Arredamento dei balconi ///
	///////////////////////////////
	loadModel('ringhiera', 20, -300, -410, 40, 0.5);
	loadModel('ringhiera', 20, -260, -465, 40, 0);
	loadModel('ringhiera', 20, -126, -465, 40, 0);
	loadModel('ringhiera', 20, 8, -465, 40, 0);
	loadModel('ringhiera', 20, 142, -465, 40, 0);
	loadModel('ringhiera', 20, 622, -465, 40, 0);
	loadModel('ringhiera', 20, 756, -465, 40, 0);
	loadModel('ringhiera', 20, 890, -465, 40, 0);
	loadModel('ringhiera', 20, 1024, -465, 40, 0);
	loadModel('ringhiera', 20, 1120, -465, 40, 0);
	loadModel('ringhiera', 20, 1203, -400, 40, 0.5);
	loadModel('ringhiera', 20, 1203, -266, 40, 0.5);
	loadModel('ringhiera', 20, 1203, -132, 40, 0.5);
	loadModel('ringhiera', 20, 1203, 2, 40, 0.5);
	loadModel('ringhiera', 20, 1203, 136, 40, 0.5);
	loadModel('ringhiera', 20, 1203, 606, 40, 0.5);
	loadModel('ringhiera', 20, 1203, 740, 40, 0.5);
	loadModel('ringhiera', 20, 1203, 874, 40, 0.5);
	loadModel('ringhiera', 20, 1120, 945, 40, 0);


	///////////////////////////
	/// Arredamento esterno ///
	///////////////////////////
	loadModel('Goku_SS3', 15, 620, 280, 40, -0.5);

	loadModel('lampione', 10, -800, -800, 40, 0 ); loadModel('lampione', 10, -800, 1200, 40, 0 );
	loadModel('lampione', 10, 300, -800, 40, 0 );  loadModel('lampione', 10, 300, 1200, 40, 0 );
	loadModel('lampione', 10, 1400, -800, 40, 0 ); loadModel('lampione', 10, 1400, 1200, 40, 0 );
	loadModel('lampione', 10, -800, 0, 40, 0 );    loadModel('lampione', 10, 1400, 0, 40, 0 );	

}