function make_White_Door() {

	var suppDx = new THREE.Mesh(new THREE.BoxGeometry(12,6,209),new THREE.MeshLambertMaterial({color: 0xffffff}));
	var suppSx = new THREE.Mesh(new THREE.BoxGeometry(12,6,209),new THREE.MeshLambertMaterial({color: 0xffffff}));
	var suppUp = new THREE.Mesh(new THREE.BoxGeometry(12,90,6),new THREE.MeshLambertMaterial({color: 0xffffff}));

	var door = new THREE.Mesh(new THREE.BoxGeometry(8,78,209),new THREE.MeshLambertMaterial({color: 0xffffff}));

	var frame = new THREE.Object3D();
	frame.add(suppSx);      
	frame.add(suppDx);      
	frame.add(suppUp);
	suppUp.position.set(0,0,212);
	suppSx.position.set(0,-42,104.5);
	suppDx.position.set(0,42,104.5);


	var hook = new THREE.Object3D();
	frame.hook = hook;
	suppDx.add(hook);
	hook.add(door);
	door.position.y = -41.5; 
	door.isClose = true;


	var cilindretto = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
	new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	cilindretto.position.set(0,-30,-8);
	cilindretto.rotation.z = Math.PI/2;
	door.add(cilindretto);


	var maniglia = new THREE.Object3D();

	var cilinder1 = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	var cilinder2 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,16,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	var stick1 = new THREE.Mesh(new THREE.BoxGeometry(13,1,.5), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xc0c0c0, shininess: 100, metal: true}));
	var stick2 = new THREE.Mesh(new THREE.BoxGeometry(13,1,.5), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xc0c0c0, shininess: 100, metal: true}));

	var handle1 = new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,9,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	var handle2 = new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,9,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	maniglia.add(cilinder1);
	maniglia.add(cilinder2);
	cilinder2.add(stick1);
	cilinder2.add(stick2);

	stick1.position.set(4.5,-8,0);
	stick2.position.set(4.5,8,0);

	handle1.rotation.z = Math.PI/2;
	handle2.rotation.z = Math.PI/2;
	handle1.position.set(2,.5,0);
	handle2.position.set(2,-.5,0);

	stick1.add(handle1);
	stick2.add(handle2);

	maniglia.position.set(0,-30,0);
	maniglia.rotation.z = Math.PI/2;
	door.add(maniglia);


	// Gestisco le animazioni per la porta
	door.animate = function() {
		if (door.isClose) {
			open_door_audio.play();
			this.open_door.start();
			door.isClose = false;
		} else {
			close_door_audio.play();
		  	this.close_door.start();
		  	door.isClose = true;
		}
	}

	door.open_door = new TWEEN.Tween(frame.hook.rotation)
	 .to({ z: -0.5*Math.PI}, 1000)

	door.close_door = new TWEEN.Tween(frame.hook.rotation)
	 .to({ z: 0*Math.PI}, 1000)

	 return frame;
}





function make_Double_Door() {

	var suppDx = new THREE.Mesh(new THREE.BoxGeometry(12,6,209),new THREE.MeshLambertMaterial({color: 0xffffff}));
	var suppSx = new THREE.Mesh(new THREE.BoxGeometry(12,6,209),new THREE.MeshLambertMaterial({color: 0xffffff}));
	var suppUp = new THREE.Mesh(new THREE.BoxGeometry(12,125,6),new THREE.MeshLambertMaterial({color: 0xffffff}));

	var doorDx = new THREE.Mesh(new THREE.BoxGeometry(8,58,209),new THREE.MeshLambertMaterial({color: 0xffffff}));
	var doorSx = new THREE.Mesh(new THREE.BoxGeometry(8,55,209),new THREE.MeshLambertMaterial({color: 0xffffff}));

	var frame = new THREE.Object3D();
	frame.add(suppSx);      
	frame.add(suppDx);      
	frame.add(suppUp);
	suppUp.position.set(0,0,212);
	suppSx.position.set(0,-59.5,104.5);
	suppDx.position.set(0,59.5,104.5);


	var hookDx = new THREE.Object3D();
	frame.hookDx = hookDx;
	suppDx.add(hookDx);
	hookDx.add(doorDx);
	doorDx.position.y = -32; 

	var hookSx = new THREE.Object3D();
	frame.hookSx = hookSx;
	suppSx.add(hookSx);
	hookSx.add(doorSx);
	doorSx.position.y = 30; 

	doorSx.isClose = true;
	doorDx.isClose = true;


	var cilindretto = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
	new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	cilindretto.position.set(0,-25,-8);
	cilindretto.rotation.z = Math.PI/2;
	doorDx.add(cilindretto);


	var maniglia = new THREE.Object3D();

	var cilinder1 = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	var cilinder2 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,16,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	var stick1 = new THREE.Mesh(new THREE.BoxGeometry(13,1,.5), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xc0c0c0, shininess: 100, metal: true}));
	var stick2 = new THREE.Mesh(new THREE.BoxGeometry(13,1,.5), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xc0c0c0, shininess: 100, metal: true}));

	var handle1 = new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,9,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	var handle2 = new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,9,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	maniglia.add(cilinder1);
	maniglia.add(cilinder2);
	cilinder2.add(stick1);
	cilinder2.add(stick2);

	stick1.position.set(4.5,-8,0);
	stick2.position.set(4.5,8,0);

	handle1.rotation.z = Math.PI/2;
	handle2.rotation.z = Math.PI/2;
	handle1.position.set(2,.5,0);
	handle2.position.set(2,-.5,0);

	stick1.add(handle1);
	stick2.add(handle2);

	maniglia.position.set(0,-25,0);
	maniglia.rotation.z = Math.PI/2;
	doorDx.add(maniglia);


	// Gestisco le animazioni per la porta
	doorDx.animate = function() {
		if (doorDx.isClose) {
			open_door_audio.play();
			this.open_door.start();
			doorDx.isClose = false;
		} else {
			close_door_audio.play();
			this.close_door.start();
			doorDx.isClose = true;
		}
	}

	doorSx.animate = function() {
		if (doorSx.isClose) {
			open_door_audio.play();
			this.open_door.start();
			doorSx.isClose = false;
		} else {
			close_door_audio.play();
			this.close_door.start();
			doorSx.isClose = true;
		}
	}

	doorDx.open_door = new TWEEN.Tween(frame.hookDx.rotation)
		.to({ z: -0.5*Math.PI}, 1000)

	doorDx.close_door = new TWEEN.Tween(frame.hookDx.rotation)
		.to({ z: 0*Math.PI}, 1000)

	doorSx.open_door = new TWEEN.Tween(frame.hookSx.rotation)
		.to({ z: 0.5*Math.PI}, 1000)

	doorSx.close_door = new TWEEN.Tween(frame.hookSx.rotation)
		.to({ z: 0*Math.PI}, 1000)


	return(frame);
	
}





function make_Security_Door() {

	var suppDx = createMesh(new THREE.BoxGeometry(12,6,209), "wood_1.jpg");
	var suppSx = createMesh(new THREE.BoxGeometry(12,6,209), "wood_1.jpg");
	var suppUp = createMesh(new THREE.BoxGeometry(12,110,6), "wood_1.jpg");

	var doorDx = createMesh(new THREE.BoxGeometry(8,29,209), "wood_2.jpg");

	var doorSx = createMesh(new THREE.BoxGeometry(8,69,209), "wood_2.jpg");

	var frame = new THREE.Object3D();
	frame.add(suppSx);      
	frame.add(suppDx);      
	frame.add(suppUp);
	suppUp.position.set(0,0,212);
	suppSx.position.set(0,-52,104.5);
	suppDx.position.set(0,52,104.5);


	var hookDx = new THREE.Object3D();
	frame.hookDx = hookDx;
	suppDx.add(hookDx);
	hookDx.add(doorDx);
	doorDx.position.y = -17; 

	var hookSx = new THREE.Object3D();
	frame.hookSx = hookSx;
	suppSx.add(hookSx);
	hookSx.add(doorSx);
	doorSx.position.y = 38; 

	doorSx.isClose = true;
	doorDx.isClose = true;

	// cilindretto per l'inserimento delle chiavi
	var cilindretto = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	cilindretto.position.set(0,25,-8);
	cilindretto.rotation.z = Math.PI/2;
	doorSx.add(cilindretto);


	var maniglia = new THREE.Object3D();

	// cilindro della maniglia
	var cilinder1 = new THREE.Mesh(new THREE.CylinderGeometry(2,2,10,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));
	var cilinder2 = new THREE.Mesh(new THREE.CylinderGeometry(1,1,16,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	// barra per girare la maniglia
	var stick = new THREE.Mesh(new THREE.BoxGeometry(13,1,.5), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xc0c0c0, shininess: 100, metal: true}));

	// cilindro per una presa comoda della maniglia
	var handle = new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,9,10,10), 
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	// pomello della porta
	var knob = new THREE.Mesh(new THREE.SphereGeometry(3,16,16),
		new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xDAA520, shininess: 100, metal: true}));

	maniglia.add(cilinder1);
	maniglia.add(cilinder2);
	cilinder2.add(knob);
	cilinder2.add(stick);

	knob.position.set(0,-9.5,0);
	stick.position.set(-5,8,0);

	handle.rotation.z = Math.PI/2;
	handle.position.set(-2,-.5,0);

	stick.add(handle);

	maniglia.position.set(0,25,0);
	maniglia.rotation.z = Math.PI/2;
	doorSx.add(maniglia);    


	//Gestisco le animazioni per la porta
	doorSx.animate = function() {
		if (doorSx.isClose) {
			open_door_audio.play();
			this.open_door.start();
			doorSx.isClose = false;
		} else {
			close_door_audio.play();
			this.close_door.start();
			doorSx.isClose = true;
		}
	}  

	doorSx.open_door = new TWEEN.Tween(frame.hookSx.rotation)
	.to({ z: 0.5*Math.PI}, 1000)

	doorSx.close_door = new TWEEN.Tween(frame.hookSx.rotation)
	.to({ z: 0*Math.PI}, 1000)



	return(frame);

}