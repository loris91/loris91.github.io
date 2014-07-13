//////////////
/// SOUNDS ///
//////////////

var guitar_audio = document.createElement('audio');
var guitar_audio_source = document.createElement('source');
guitar_audio_source.src = 'assets/sounds/beat.mp3';
guitar_audio.appendChild(guitar_audio_source);
guitar_audio.loop = false;
guitar_audio.onPlay = false;

var microwave_audio =  document.createElement('audio');
var microwave_audio_source = document.createElement('source');
microwave_audio_source.src = 'assets/sounds/microwave.mp3';
microwave_audio.appendChild(microwave_audio_source);
microwave_audio.loop = false;
microwave_audio.onPlay = false;





//////////////
/// VIDEOS ///
//////////////

var diplayMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: true } );

/* Video della televisione in salotto */
video = document.createElement( 'video' );
	video.src = "assets/videos/secrets.mp4";
	video.onPlay = false;

videoImage = document.createElement( 'canvas' );
	videoImage.width = 640;
	videoImage.height = 360;

videoImageContext = videoImage.getContext( '2d' );
	videoImageContext.fillStyle = '#000000';
	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

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


/* Video della televisione in sala */
var movieGeometry = new THREE.PlaneGeometry( 120, 70, 4, 4 );

video1 = document.createElement( 'video' );
	video1.src = "assets/videos/kayak.mp4";
	video1.onPlay = false;
videoImage1 = document.createElement( 'canvas' );
	videoImage1.width = 320;
	videoImage1.height = 180;
videoImageContext1 = videoImage1.getContext( '2d' );
	videoImageContext1.fillStyle = '#000000';
	videoImageContext1.fillRect( 0, 0, videoImage1.width, videoImage1.height );
videoTexture1 = new THREE.Texture( videoImage1 );
	videoTexture1.minFilter = THREE.LinearFilter;
	videoTexture1.magFilter = THREE.LinearFilter;
var movieMaterial1 = new THREE.MeshBasicMaterial( { map: videoTexture1, overdraw: true } );
var movieGeometry = new THREE.PlaneGeometry( 120, 70, 4, 4 );
var movieScreen1 = new THREE.Mesh( movieGeometry, movieMaterial1 );
	movieScreen1.rotation.x = Math.PI/2;
	movieScreen1.rotation.y = -0.2*Math.PI;
	movieScreen1.position.set(945, 70, 153);
	movieScreen1.visible = false;
	house.add(movieScreen1);

video2 = document.createElement( 'video' );
	video2.src = "assets/videos/dragonball.ogv";
	video2.onPlay = false;
videoImage2 = document.createElement( 'canvas' );
	videoImage2.width = 320;
	videoImage2.height = 180;
videoImageContext2 = videoImage2.getContext( '2d' );
	videoImageContext2.fillStyle = '#000000';
	videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );
videoTexture2 = new THREE.Texture( videoImage2 );
	videoTexture2.minFilter = THREE.LinearFilter;
	videoTexture2.magFilter = THREE.LinearFilter;
var movieMaterial2 = new THREE.MeshBasicMaterial( { map: videoTexture2, overdraw: true } );
var movieScreen2 = new THREE.Mesh( movieGeometry, movieMaterial2 );
	movieScreen2.rotation.x = Math.PI/2;
	movieScreen2.rotation.y = -0.2*Math.PI;
	movieScreen2.position.set(945, 70, 153);
	movieScreen2.visible = false;
	house.add(movieScreen2);

video3 = document.createElement( 'video' );
	video3.src = "assets/videos/totti.mp4";
	video3.onPlay = false;
videoImage3 = document.createElement( 'canvas' );
	videoImage3.width = 320;
	videoImage3.height = 180;
videoImageContext3 = videoImage3.getContext( '2d' );
	videoImageContext3.fillStyle = '#000000';
	videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );
videoTexture3 = new THREE.Texture( videoImage3 );
	videoTexture3.minFilter = THREE.LinearFilter;
	videoTexture3.magFilter = THREE.LinearFilter;
var movieMaterial3 = new THREE.MeshBasicMaterial( { map: videoTexture3, overdraw: true } );
var movieScreen3 = new THREE.Mesh( movieGeometry, movieMaterial3 );
	movieScreen3.rotation.x = Math.PI/2;
	movieScreen3.rotation.y = -0.2*Math.PI;
	movieScreen3.position.set(945, 70, 153);
	movieScreen3.visible = false;
	house.add(movieScreen3);