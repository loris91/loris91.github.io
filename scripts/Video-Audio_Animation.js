/* Animazione della chitarra in cameretta */
guitar_box.animate = function() {
	if (guitar_audio.onPlay) {
		guitar_audio.pause();
		guitar_audio.onPlay = false;
	} else {
		guitar_audio.play();
		guitar_audio.onPlay = true;
	}	
}


/* Animazione della macchinetta del caffe */
coffee_box.animate = function() {
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
    
microwave_box.animate = function() {
	var rotatePizza = new TWEEN.Tween(pizza.rotation)
    .to({ y: 6*Math.PI},4500)
	microwave_audio.play();
	microwave_light.intensity = 2;
	setTimeout( function() { rotatePizza.start() } , 200);
	setTimeout( function() { microwave_light.intensity = 0 } , 10500);
}



/* Animazione della televisione in salotto */
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

tv_salotto_box.animate = function() {
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

var contatore = 0;
tv_sala_box.animate = function() {
	if (video1.onPlay || video2.onPlay || video3.onPlay) {
		movieScreen1.visible = movieScreen2.visible = movieScreen3.visible = false;
		video1.onPlay = video2.onPlay = video3.onPlay = false;
		video1.pause(); video2.pause(); video3.pause();
	} else {
		if (contatore%3===0){
			movieScreen1.visible = true;
			video1.onPlay = true;
			video1.play();
		}
		if (contatore%3===1){
			movieScreen2.visible = true;
			video2.onPlay = true;
			video2.play();			
		}
		if (contatore%3===2){
			movieScreen3.visible = true;
			video3.onPlay = true;
			video3.play();			
		}		
	}
}


telecomando_box.animate = function() {
	if (video1.onPlay || video2.onPlay || video3.onPlay) {
		if (contatore%3===0){
			movieScreen1.visible = false;
			movieScreen2.visible = true;
			video1.onPlay = false; video2.onPlay = true;
			video1.pause(); video2.play();
		}
		if (contatore%3===1){
			movieScreen2.visible = false;
			movieScreen3.visible = true;
			video2.onPlay = false; video3.onPlay = true;
			video2.pause(); video3.play();		
		}
		if (contatore%3===2){
			movieScreen3.visible = false;
			movieScreen1.visible = true;
			video3.onPlay = false; video1.onPlay = true;
			video3.pause(); video1.play();			
		}	
		contatore ++;
	}
}