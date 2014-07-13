guitar_box.animate = function() {
	if (guitar_audio.onPlay) {
		guitar_audio.pause();
		guitar_audio.onPlay = false;
	} else {
		guitar_audio.play();
		guitar_audio.onPlay = true;
	}	
}

var rotateLamp = new TWEEN.Tween(pizza.rotation)
    .to({ y: 2*Math.PI},1500)
    .repeat(3)
    
microwave_box.animate = function() {
		microwave_audio.play();
		microwave_light.intensity = 1;
		setTimeout( function() { rotateLamp.start() } , 200);
		setTimeout( function() { microwave_light.intensity = 0 } , 10500);
}


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