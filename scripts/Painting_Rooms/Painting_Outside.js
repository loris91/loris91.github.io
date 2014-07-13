<!-- Aggiungo una texture per l'' esterno della casa -->

function createShape(dim) {
	var s = new THREE.Shape();
		s.moveTo(0,0);
		s.lineTo(dim,0);
		s.lineTo(dim,.310);
		s.lineTo(0,.310);
		s.lineTo(0,0);
	return s;
}

function createHole(X1,Y1,X2,Y2) {
	var h = new THREE.Path();
		h.moveTo(X1,Y1);
		h.lineTo(X2,Y1);
		h.lineTo(X2,Y2);
		h.lineTo(X1,Y2);
		h.lineTo(X1,Y1);
	return h;
}
function getOption() {
	var option = {
	    amount: 0.5,
	    bevelThickness: 10,
	    curveSegments: 30,
	    steps: 100,
	    bevelEnabled: false
  	};
  	return option;
}

<!-- Creo il muro esterno alla cameretta e al bagno -->
var shape_1 = createShape(.485);
	var hole_1_1 = createHole(.060,0,.140,.225);
	var hole_1_2 = createHole(.340,.095,.410,.225);
	shape_1.holes.push(hole_1_1);
	shape_1.holes.push(hole_1_2);
var out_wall_1 = createMesh(new THREE.ExtrudeGeometry(shape_1,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_1.scale.set(1000,1000,1);
	out_wall_1.rotation.x = Math.PI/2;
	out_wall_1.position.set(-315,-331,40);
	house.add(out_wall_1);

<!-- Creo il muro esterno alla camera da letto -->
var shape_2 = createShape(.420);
	var hole_2 = createHole(.080,.095,.300,.225);
	shape_2.holes.push(hole_2);
var out_wall_2 = createMesh(new THREE.ExtrudeGeometry(shape_2,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_2.scale.set(1000,1000,1);
	out_wall_2.rotation.x = Math.PI/2;
	out_wall_2.position.set(170,-471,40);
	house.add(out_wall_2);

<!-- Creo il muro esterno tra bagno e camera da letto -->
var shape_3 = createShape(.140);
var out_wall_3 = createMesh(new THREE.ExtrudeGeometry(shape_3,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_3.scale.set(1000,1000,1);
	out_wall_3.rotation.x = Math.PI/2;
	out_wall_3.rotation.y = Math.PI/2;
	out_wall_3.position.set(169,-471,40);
	house.add(out_wall_3);

<!-- Creo il muro esterno tra camera da letto e sala da pranzo -->
var shape_3 = createShape(.140);
var out_wall_3 = createMesh(new THREE.ExtrudeGeometry(shape_3,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_3.scale.set(1000,1000,1);
	out_wall_3.rotation.x = Math.PI/2;
	out_wall_3.rotation.y = -Math.PI/2;
	out_wall_3.position.set(591,-331,40);
	house.add(out_wall_3);

<!-- Creo il primo muro esterno della sala da pranzo -->
var shape_4 = createShape(.460);
	var hole_4_1 = createHole(.090,0,.1699,.225);
	var hole_4_2 = createHole(.1701,.095,.310,.225);
	shape_4.holes.push(hole_4_1);
	shape_4.holes.push(hole_4_2);
var out_wall_4 = createMesh(new THREE.ExtrudeGeometry(shape_4,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_4.scale.set(1000,1000,1);
	out_wall_4.rotation.x = Math.PI/2;
	out_wall_4.position.set(590,-336,40);
	house.add(out_wall_4);

<!-- Creo il secondo muro esterno della sala da pranzo -->
var shape_5 = createShape(.475);
	var hole_5_1 = createHole(.105,0,.1849,.225);
	var hole_5_2 = createHole(.1851,.095,.325,.225);
	shape_5.holes.push(hole_5_1);
	shape_5.holes.push(hole_5_2);
var out_wall_5 = createMesh(new THREE.ExtrudeGeometry(shape_5,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_5.scale.set(1000,1000,1);
	out_wall_5.rotation.x = Math.PI/2;
	out_wall_5.rotation.y = -Math.PI/2;
	out_wall_5.position.set(1051,140,40);
	house.add(out_wall_5);

<!-- Creo il muro esterno tra sala da pranzo e cucina -->
var shape_6 = createShape(.160);
var out_wall_6 = createMesh(new THREE.ExtrudeGeometry(shape_6,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_6.scale.set(1000,1000,1);
	out_wall_6.rotation.x = Math.PI/2;
	out_wall_6.position.set(1050,140,40);
	house.add(out_wall_6);

<!-- Creo il secondo muro esterno della cucina -->
var shape_7 = createShape(.410);
	var hole_7_1 = createHole(.110,0.095,.330,.225);
	shape_7.holes.push(hole_7_1);
var out_wall_7 = createMesh(new THREE.ExtrudeGeometry(shape_7,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_7.scale.set(1000,1000,1);
	out_wall_7.rotation.x = Math.PI/2;
	out_wall_7.rotation.y = -Math.PI/2;
	out_wall_7.position.set(1211,550,40);
	house.add(out_wall_7);

<!-- Creo il muro esterno tra cucina e salotto -->
var shape_8 = createShape(.160);
var out_wall_8 = createMesh(new THREE.ExtrudeGeometry(shape_8,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_8.scale.set(1000,1000,1);
	out_wall_8.rotation.x = Math.PI/2;
	out_wall_8.position.set(1050,551,40);
	house.add(out_wall_8);

<!-- Creo il muro del salotto -->
var shape_9 = createShape(.410);
	var hole_9_1 = createHole(.040,.095,.110,.225);
	var hole_9_2 = createHole(.290,0,.370,.225);
	shape_9.holes.push(hole_9_1);
	shape_9.holes.push(hole_9_2);
var out_wall_9 = createMesh(new THREE.ExtrudeGeometry(shape_9,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_9.scale.set(1000,1000,1);
	out_wall_9.rotation.x = Math.PI/2;
	out_wall_9.rotation.y = -Math.PI/2;
	out_wall_9.position.set(1061,960,40);
	house.add(out_wall_9);

<!-- Creo il secondo muro del salotto -->
var shape_10 = createShape(.470);
var out_wall_10 = createMesh(new THREE.ExtrudeGeometry(shape_10,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_10.scale.set(1000,1000,1);
	out_wall_10.rotation.x = Math.PI/2;
	out_wall_10.position.set(590,961,40);
	house.add(out_wall_10);

<!-- Creo il muro esterno al salotto e al corridoio -->
var shape_11 = createShape(.590);
var out_wall_11 = createMesh(new THREE.ExtrudeGeometry(shape_11,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_11.scale.set(1000,1000,1);
	out_wall_11.rotation.x = Math.PI/2;
	out_wall_11.rotation.y = -Math.PI/2;
	out_wall_11.position.set(589,961,40);
	house.add(out_wall_11);

<!-- Creo il muro esterno al corridoio -->
var shape_12 = createShape(.170);
var out_wall_12 = createMesh(new THREE.ExtrudeGeometry(shape_12,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_12.scale.set(1000,1000,1);
	out_wall_12.rotation.x = Math.PI/2;
	out_wall_12.position.set(589,369,40);
	house.add(out_wall_12);

<!-- Creo il secondo muro esterno al corridoio -->
var shape_13 = createShape(.220);
var out_wall_13 = createMesh(new THREE.ExtrudeGeometry(shape_13,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_13.scale.set(1000,1000,1);
	out_wall_13.rotation.x = Math.PI/2;
	out_wall_13.rotation.y = Math.PI/2;
	out_wall_13.position.set(759,150,40);
	house.add(out_wall_13);

<!-- Creo il muro esterno per l''ingresso -->
var shape_14 = createShape(1.075);
	var hole_14 = createHole(.645,0,.765,.220);
	shape_14.holes.push(hole_14);
var out_wall_14 = createMesh(new THREE.ExtrudeGeometry(shape_14,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_14.scale.set(1000,1000,1);
	out_wall_14.rotation.x = Math.PI/2;
	out_wall_14.position.set(-315,151,40);
	house.add(out_wall_14);

<!-- Creo il muro esterno per della cameretta -->
var shape_15 = createShape(.485);
var out_wall_15 = createMesh(new THREE.ExtrudeGeometry(shape_15,getOption()), "brickwall.jpg", "brickwall_bund.jpg", true, 3, 5);
	out_wall_15.scale.set(1000,1000,1);
	out_wall_15.rotation.x = Math.PI/2;
	out_wall_15.rotation.y = Math.PI/2;
	out_wall_15.position.set(-316,-330,40);
	house.add(out_wall_15);