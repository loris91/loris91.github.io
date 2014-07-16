var box_material = new THREE.MeshLambertMaterial({ color: 0x0000ff, opacity: 0.1, transparent: true });

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



/* MicroWave cucina */
loadModel('microwave', 1, 1080, 500, 60, 0.5);

var pizza = createMesh( new THREE.CylinderGeometry(10, 10, 1, 20, 20), 'pizza.jpg');
pizza.rotation.x = Math.PI/2;
pizza.position.set(933,368,125);
house.add(pizza);

var microwave_box = new THREE.Mesh( new THREE.BoxGeometry(40,50,30), box_material );
house.add(microwave_box);
microwave_box.position.set(930,370,130);
objects.push(microwave_box);

var microwave_light = new THREE.SpotLight( 0xffff00, 0, 20); 
microwave_light.position.set(950,365,140);
microwave_light.target = pizza;
house.add(microwave_light);


/* Macchinetta del caffe */
loadModel('coffee', .08, 840, 580, 140, 0.5);

var coffee_box = new THREE.Mesh( new THREE.BoxGeometry(40, 30, 60), box_material);
house.add(coffee_box);
coffee_box.position.set(930, 505, 130);
objects.push(coffee_box);
coffee_box.inactive = true;

var coffee_cilinder = new THREE.Mesh( 
	new THREE.CylinderGeometry(8,8,12,20), 
	new THREE.MeshLambertMaterial({color: 0x6f4e37, opacity:0.9, transparent:false}));
coffee_cilinder.scale.y = 0.0001;
coffee_cilinder.rotation.x = Math.PI/2;
coffee_cilinder.position.set(10,0,-10);
coffee_box.add(coffee_cilinder);






///////////////////////////////
/// Arredamento del salotto ///
///////////////////////////////

loadModel('sofa1', 1, 700, 950, 40, 0);
loadModel('sofa1', 1, 605, 650, 40, 0.5);
loadModel('tavolo_salotto', 100, 730, 670, 40, 0.5);
loadModel('portaTV_salotto', 1, 990, 760, 40, -0.5);
loadModel('led_tv', 2.4 , 985, 760, 94, -0.5);


var tv_salotto_box = new THREE.Mesh( new THREE.BoxGeometry(20,200,120), box_material );
house.add(tv_salotto_box);
tv_salotto_box.position.set(983, 760, 180);
objects.push(tv_salotto_box);



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
loadModel('officechair', 1, -475, -25, 163, 0);
loadModel('libreria', 0.8, -215, -150, 200, -0.5);
loadModel('electricGuitar', 1, -25, -20, 92, -0.5);
loadModel('juniorBed', 1, -235, 40, 40, 0);
loadModel('armadio_cameretta', 1, -235, -280, 45, 0.5);


var guitar_box = new THREE.Mesh( new THREE.BoxGeometry(30,40,80), box_material );
house.add(guitar_box);
guitar_box.position.set(-38,-15,80);
objects.push(guitar_box);




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


var tv_sala_box = new THREE.Mesh( new THREE.BoxGeometry(25,130,100), box_material );
house.add(tv_sala_box);
tv_sala_box.rotation.z = 0.3*Math.PI;
tv_sala_box.position.set(950, 80, 140);
objects.push(tv_sala_box);

var telecomando_box = new THREE.Mesh( new THREE.BoxGeometry(30,30,15 ), box_material );
house.add(telecomando_box);
telecomando_box.rotation.z = 0.3*Math.PI;
telecomando_box.position.set(850, -90, 130);
objects.push(telecomando_box);


////////////////////////////////
/// Arredamento della camere ///
////////////////////////////////

loadModel('bed1', 1, 565, -250, 40, -0.5);
loadModel('armadio', 1, 205, -250, 40, 0.5);
loadModel('como', 1, 405, -485, 40, -0.5);



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


loadModel('lampione', 10, -800, -800, 40, 0 );loadModel('lampione', 10, -800, 1200, 40, 0 );
loadModel('lampione', 10, 300, -800, 40, 0 );loadModel('lampione', 10, 300, 1200, 40, 0 );
loadModel('lampione', 10, 1400, -800, 40, 0 );loadModel('lampione', 10, 1400, 1200, 40, 0 );
loadModel('lampione', 10, -800, 0, 40, 0 );loadModel('lampione', 10, 1400, 0, 40, 0 );


/* Tosaerba */
tosaErba.position.set(-1000,-1000,0);
var camera_target = 
	new THREE.Object3D();
	//new THREE.Mesh( new THREE.SphereGeometry(100,20,20), new THREE.MeshLambertMaterial({color: 0x7777ff}) );
	tosaErba.add(camera_target);
	tosaErba.add(tosaErba_camera);
	camera_target.position.set(0,5000,180);
	tosaErba_camera.position.set(0,0,180);
	tosaErba_camera.up = new THREE.Vector3(0,0,1);
	tosaErba_camera.lookAt(camera_target.position);
loadModel2('17486_Lawn_Mower_Cart', tosaErba, 1, 300, 200, 40, 0, 1);
loadModel2('sitMale02', tosaErba, 1, -55, -40, 30, 1, 1);