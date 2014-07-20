function insertAudioVideoAnimation(house) {

	var box_material = new THREE.MeshLambertMaterial({ color: 0x0000ff, opacity: 0.0, transparent: true });

	/* Animazione della chitarra in cameretta */
	var guitar_box = new THREE.Mesh( new THREE.BoxGeometry(30,40,80), box_material );
	house.add(guitar_box);
	guitar_box.position.set(-36,-15,80);
	toIntersect.push(guitar_box);

	guitar_box.interact = function() {
		if (guitar_audio.onPlay) {
			guitar_audio.pause();
			guitar_audio.onPlay = false;
		} else {
			guitar_audio.play();
			guitar_audio.onPlay = true;
		}	
	}

	/* Animazione della macchinetta del caffe */
	var coffee_box = new THREE.Mesh( new THREE.BoxGeometry(40, 30, 60), box_material);
	house.add(coffee_box);
	coffee_box.position.set(930, 505, 130);
	toIntersect.push(coffee_box);
	coffee_box.inactive = true;

	var coffee_cilinder = new THREE.Mesh( 
		new THREE.CylinderGeometry(8,8,12,20), 
		new THREE.MeshLambertMaterial({color: 0x6f4e37, opacity:0.9, transparent:false}));
	coffee_cilinder.scale.y = 0.0001;
	coffee_cilinder.rotation.x = Math.PI/2;
	coffee_cilinder.position.set(10,0,-10);
	coffee_box.add(coffee_cilinder);
	coffee_box.interact = function() {
		if (coffee_box.inactive) {
			coffee_box.inactive = false;
			coffee_audio.play();
			var versa_caffe1 = new TWEEN.Tween(coffee_cilinder.scale)
				.to({y: 1}, 3800)
				.start()
			var versa_caffe2 = new TWEEN.Tween(coffee_cilinder.position)
				.to({z: 0}, 3800)
				.start()
		}
	}

	/* Animazione del forno a micronde */   
	var pizza = createMesh( new THREE.CylinderGeometry(10, 10, 1, 20, 20), 'pizza.jpg');
	pizza.rotation.x = Math.PI/2;
	pizza.position.set(933,368,125);
	house.add(pizza);

	var microwave_box = new THREE.Mesh( new THREE.BoxGeometry(40,50,30), box_material );
	house.add(microwave_box);
	microwave_box.position.set(930,370,130);
	toIntersect.push(microwave_box);

	var microwave_light = new THREE.SpotLight( 0xffff00, 0, 20); 
	microwave_light.position.set(950,365,140);
	microwave_light.target = pizza;
	house.add(microwave_light);

	microwave_box.interact = function() {
		var rotatePizza = new TWEEN.Tween(pizza.rotation)
	    .to({ y: 8*Math.PI},6000)
		microwave_audio.play();
		microwave_light.intensity = 2;
		setTimeout( function() { rotatePizza.start() } , 200);
		setTimeout( function() { microwave_light.intensity = 0 } , 10500);
	}

	/* Animazione della sveglia in camera */
	var sveglia_box = new THREE.Mesh(new THREE.BoxGeometry(50,50,30), box_material);
	house.add(sveglia_box);
	sveglia_box.position.set(310, -30, 120);
	toIntersect.push(sveglia_box);
	
	sveglia_box.interact = function() {
		var oraAttuale = getOra();
		sveglia_box.add(oraAttuale);
		setTimeout(function(){sveglia_box.remove(sveglia_box.children[1])}, 1500);
	}


	/* Animazione della televisione in salotto */
	var tv_salotto_box = new THREE.Mesh( new THREE.BoxGeometry(20,200,120), box_material );
	house.add(tv_salotto_box);
	tv_salotto_box.position.set(983, 760, 180);
	toIntersect.push(tv_salotto_box);

	var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true } );
	var movieGeometry = new THREE.PlaneGeometry( 180, 96, 4, 4 );
	var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
		movieScreen.position.set(983, 760, 165);
		movieScreen.rotation.x = Math.PI/2;
		movieScreen.rotation.y = -Math.PI/2;
		movieScreen.visible = false;
		house.add(movieScreen);

	var diplay_salotto = new THREE.Mesh( movieGeometry, diplayMaterial );
		diplay_salotto.position.set(983, 760, 165);
		diplay_salotto.rotation.x = Math.PI/2;
		diplay_salotto.rotation.y = -Math.PI/2;
		house.add(diplay_salotto);

	tv_salotto_box.interact = function() {
		if (video.onPlay) {
			movieScreen.visible = false;
			diplay_salotto.visible = true;
			video.onPlay = false;
			video.pause();
		} else {
			diplay_salotto.visible = false;
			movieScreen.visible = true;
			video.onPlay = true;
			video.play();
		}
	}


	/* Animazione della televisione in sala */
	var tv_sala_box = new THREE.Mesh( new THREE.BoxGeometry(25,130,100), box_material );
	house.add(tv_sala_box);
	tv_sala_box.rotation.z = 0.3*Math.PI;
	tv_sala_box.position.set(950, 80, 140);
	toIntersect.push(tv_sala_box);

	var telecomando_box = new THREE.Mesh( new THREE.BoxGeometry(30,30,15 ), box_material );
	house.add(telecomando_box);
	telecomando_box.rotation.z = 0.3*Math.PI;
	telecomando_box.position.set(850, -90, 130);
	toIntersect.push(telecomando_box);

	var movieMaterial1 = new THREE.MeshBasicMaterial( { map: videoTexture1, overdraw: true } );
	var movieGeometry = new THREE.PlaneGeometry( 120, 70, 4, 4 );
	var movieScreen1 = new THREE.Mesh( movieGeometry, movieMaterial1 );
		movieScreen1.rotation.x = Math.PI/2;
		movieScreen1.rotation.y = -0.2*Math.PI;
		movieScreen1.position.set(945, 70, 153);
		movieScreen1.visible = false;
		house.add(movieScreen1);

	var movieMaterial2 = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true } );
	var movieScreen2 = new THREE.Mesh( movieGeometry, movieMaterial2 );
		movieScreen2.rotation.x = Math.PI/2;
		movieScreen2.rotation.y = -0.2*Math.PI;
		movieScreen2.position.set(945, 70, 153);
		movieScreen2.visible = false;
		house.add(movieScreen2);

	var movieMaterial3 = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true } );
	var movieScreen3 = new THREE.Mesh( movieGeometry, movieMaterial3 );
		movieScreen3.rotation.x = Math.PI/2;
		movieScreen3.rotation.y = -0.2*Math.PI;
		movieScreen3.position.set(945, 70, 153);
		movieScreen3.visible = false;
		house.add(movieScreen3);

	var contTv = 0;
	tv_sala_box.interact = function() {
		if (video1.onPlay || video2.onPlay || video3.onPlay) {
			movieScreen1.visible = movieScreen2.visible = movieScreen3.visible = false;
			video1.onPlay = video2.onPlay = video3.onPlay = false;
			video1.pause(); video2.pause(); video3.pause();
		} else {
			if (contTv%3===0){
				movieScreen1.visible = true;
				video1.onPlay = true;
				video1.play();
			}
			if (contTv%3===1){
				movieScreen2.visible = true;
				video2.onPlay = true;
				video2.play();			
			}
			if (contTv%3===2){
				movieScreen3.visible = true;
				video3.onPlay = true;
				video3.play();			
			}		
		}
	}


	telecomando_box.interact = function() {
		if (video1.onPlay || video2.onPlay || video3.onPlay) {
			if (contTv%3===0){
				movieScreen1.visible = false;
				movieScreen2.visible = true;
				video1.onPlay = false; video2.onPlay = true;
				video1.pause(); video2.play();
			}
			if (contTv%3===1){
				movieScreen2.visible = false;
				movieScreen3.visible = true;
				video2.onPlay = false; video3.onPlay = true;
				video2.pause(); video3.play();		
			}
			if (contTv%3===2){
				movieScreen3.visible = false;
				movieScreen1.visible = true;
				video3.onPlay = false; video1.onPlay = true;
				video3.pause(); video1.play();			
			}	
			contTv ++;
		}
	}


	/* Animazione Stereo Sala da pranzo */
	var stereo_box = new THREE.Mesh( new THREE.BoxGeometry(30,60,30 ), box_material );
	loadModel2('mini_stereo', stereo_box, 1, 0, 0, -10, 1, 0);
	house.add(stereo_box);
	stereo_box.position.set(720, 120, 130);
	toIntersect.push(stereo_box);
	var contStereo = 0;
	stereo_box.interact = function() {
		if (contStereo%6 ===0){
			brano_audio1.play();
		}
		if (contStereo%6 ===1){
			brano_audio1.pause();
			brano_audio1.currentTime = 0;
			brano_audio2.play();
		}
		if (contStereo%6 ===2){
			brano_audio2.pause();
			brano_audio2.currentTime = 0;
			brano_audio3.play();
		}
		if (contStereo%6 ===3){
			brano_audio3.pause();
			brano_audio3.currentTime = 0;
			brano_audio4.play();
		}
		if (contStereo%6 ===4){
			brano_audio4.pause();
			brano_audio4.currentTime = 0;
			brano_audio5.play();
		}
		if (contStereo%6 ===5){
			brano_audio5.pause();
			brano_audio5.currentTime = 0;
		}	
		contStereo ++;
	};
}