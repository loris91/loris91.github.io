var box_material = new THREE.MeshLambertMaterial({ color: 0x0000ff, opacity: 0.1, transparent: true });

var heller = new THREE.AxisHelper(100);

/* Luce cucina */
var switcher1 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material );
	objects.push(switcher1);
	switcher1.position.set(901,270,160);
	house.add(switcher1);
	makeInternalLight(switcher1, 150, 80, 145);
	loadModel2('lightSwitch', switcher1, 2, 0, 0, 0, 1, 0.5);
	loadModel('lampadario_pale', 1, 1000, 300, 300, 0.5);

/* Luce sala da pranzo */
var switcher2 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material );
	objects.push(switcher2);
	switcher2.position.set(591,0,160);
	house.add(switcher2);
	makeInternalLight(switcher2, 220, -90, 145);
	loadModel2('lightSwitch', switcher2, 2, 0, 0, 0, 1, 0.5);
	loadModel('lampadario1', 1, 800, -100, 300, 0.5);

/* Luce salotto */
var switcher3 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material );
	objects.push(switcher3);
	switcher3.position.set(720,551,160);
	house.add(switcher3);
	makeInternalLight(switcher3, 95, 215, 145);
	loadModel2('lightSwitch', switcher3, 2, 0, 0, 0, 1, 1);
	loadModel('lampadario1', 1, 800, 750, 300, 0.5);


/* Luce Cameretta */
var switcher4 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material);
	objects.push(switcher4);
	switcher4.position.set(-1,20,160);
	house.add(switcher4);
	makeInternalLight(switcher4, -155, -105, 145);
	loadModel2('lightSwitch', switcher4, 2, 0, 0, 0, 1, -0.5);
	loadModel('lampadario1', 1, -170, -100, 300, 0.5);


/* Luce bagno */
var switcher5 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material);
	objects.push(switcher5);
	switcher5.position.set(110,-1,160);
	house.add(switcher5);
	makeInternalLight(switcher5, -20, -170, 145);
	loadModel2('lightSwitch', switcher5, 2, 0, 0, 0, 1, 2);
	loadModel('lampadario1', 1, 80, -180, 300, 0.5);


/* Luce camera da letto  */
var switcher6 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material);
	objects.push(switcher6);
	switcher6.position.set(520,-1,160);
	house.add(switcher6);
	makeInternalLight(switcher6, -110, -170, 145);
	loadModel2('lightSwitch', switcher6, 2, 0, 0, 0, 1, 0);
	loadModel('lampadario1', 1, 400, -180, 300, 0.5);


/* Luce del corridoio principale */
var switcher7 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material);
	objects.push(switcher7);
	switcher7.position.set(350,11,160);
	house.add(switcher7);
	makeInternalLight(switcher7, 10, 60, 145);
	loadModel2('lightSwitch', switcher7, 2, 0, 0, 0, 1, 1);
	loadModel('lampadario1', 1, 350, 60, 300, 0.5);


/* Luce del corridoio principale */
var switcher8 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), box_material);
	objects.push(switcher8);
	switcher8.position.set(780,151,160);
	house.add(switcher8);
	makeInternalLight(switcher8, 30, 280, 145);
	loadModel2('lightSwitch', switcher8, 2, 0, 0, 0, 1, 1);
	loadModel('lampadario1', 1, 800, 420, 300, 0.5);