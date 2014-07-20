function makeTosaErba(tosaErba){
	var camera_target = new THREE.Object3D();
		tosaErba.add(camera_target);
		camera_target.position.set(0,5000,-500);
		tosaErba.children[0].position.set(-50,-40,180);
		tosaErba.children[0].up = new THREE.Vector3(0,0,1);
		tosaErba.children[0].lookAt(camera_target.position);
	loadModel2('17486_Lawn_Mower_Cart', tosaErba, 1, 300, 200, 40, 0, 1);
	loadModel2('sitMale02', tosaErba, 1, -55, -40, 30, 1, 1);

	tosaErba.position.set(-1000,-1000,0);
	tosaErba.animate = function() {
		mower_audio.play();
		var goWest = new TWEEN.Tween(tosaErba.position)
			.to({ x: -1600}, 5000)
		var goSud = new TWEEN.Tween(tosaErba.position)
			.chain(goWest)
			.to({ y: -1400}, 5000)
		var goEst = new TWEEN.Tween(tosaErba.position)
			.chain(goSud)
			.to({ x: 1600}, 5000)
		var goNord = new TWEEN.Tween(tosaErba.position)
			.to({ y: 1400}, 5000)
			.chain(goEst)

		var turnleft4 = new TWEEN.Tween(tosaErba.rotation)
			.to({ z: -2*Math.PI}, 500)
			.delay(4200)
		var turnleft3 = new TWEEN.Tween(tosaErba.rotation)
			.to({ z: -1.5*Math.PI}, 500)
			.delay(4350)
			.chain(turnleft4)
		var turnleft2 = new TWEEN.Tween(tosaErba.rotation)
			.to({ z: -Math.PI}, 500)
			.delay(4500)
			.chain(turnleft3)
		var turnleft1 = new TWEEN.Tween(tosaErba.rotation)
			.to({ z: -Math.PI/2}, 500)
			.delay(4750)
			.chain(turnleft2)

		setTimeout( function(){ turnleft1.start(); goNord.start()}, 1500);
		setTimeout( function() { mower_audio.pause() } , 22300);
	};
	return tosaErba;
}