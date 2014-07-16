//////////////
/// SOUNDS ///
//////////////

var open_door_audio = document.createElement('audio');
var open_door_audio_source = document.createElement('source');
open_door_audio_source.src = 'assets/sounds/open_door.mp3';
open_door_audio.appendChild(open_door_audio_source);
open_door_audio.loop = false;
open_door_audio.onPlay = false;

var close_door_audio = document.createElement('audio');
var close_door_audio_source = document.createElement('source');
close_door_audio_source.src = 'assets/sounds/close_door.mp3';
close_door_audio.appendChild(close_door_audio_source);
close_door_audio.loop = false;
close_door_audio.onPlay = false;

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


var mower_audio =  document.createElement('audio');
var mower_audio_source = document.createElement('source');
mower_audio_source.src = 'assets/sounds/mower.mp3';
mower_audio.appendChild(mower_audio_source);
mower_audio.loop = false;


var coffee_audio =  document.createElement('audio');
var coffee_audio_source = document.createElement('source');
coffee_audio_source.src = 'assets/sounds/coffee.mp3';
coffee_audio.appendChild(coffee_audio_source);
coffee_audio.loop = false;




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