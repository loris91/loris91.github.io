//////////////
/// SOUNDS ///
//////////////

// Brani per la radio

var brano_audio1 = document.createElement('audio');
var brano_audio1_source = document.createElement('source');
brano_audio1_source.src = 'assets/sounds/classica.mp3';
brano_audio1.appendChild(brano_audio1_source);
brano_audio1.loop = false;
brano_audio1.position = new THREE.Vector3(450, 10, -52);
brano_audio1.updateVolume = function() {
	var distance = brano_audio1.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? brano_audio1.volume = 1 - distance / 300 : brano_audio1.volume = 0;
}

var brano_audio2 = document.createElement('audio');
var brano_audio2_source = document.createElement('source');
brano_audio2_source.src = 'assets/sounds/pop.mp3';
brano_audio2.appendChild(brano_audio2_source);
brano_audio2.loop = false;
brano_audio2.position = new THREE.Vector3(450, 10, -52);
brano_audio2.updateVolume = function() {
	var distance = brano_audio2.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? brano_audio2.volume = 1 - distance / 300 : brano_audio2.volume = 0;
}

var brano_audio3 = document.createElement('audio');
var brano_audio3_source = document.createElement('source');
brano_audio3_source.src = 'assets/sounds/rap.mp3';
brano_audio3.appendChild(brano_audio3_source);
brano_audio3.loop = false;
brano_audio3.position = new THREE.Vector3(450, 10, -52);
brano_audio3.updateVolume = function() {
	var distance = brano_audio3.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? brano_audio3.volume = 1 - distance / 300 : brano_audio3.volume = 0;
}

var brano_audio4 = document.createElement('audio');
var brano_audio4_source = document.createElement('source');
brano_audio4_source.src = 'assets/sounds/reggae.mp3';
brano_audio4.appendChild(brano_audio4_source);
brano_audio4.loop = false;
brano_audio4.position = new THREE.Vector3(450, 10, -52)
brano_audio4.updateVolume = function() {
	var distance = brano_audio4.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? brano_audio4.volume = 1 - distance / 300 : brano_audio4.volume = 0;
}

var brano_audio5 = document.createElement('audio');
var brano_audio5_source = document.createElement('source');
brano_audio5_source.src = 'assets/sounds/disco.mp3';
brano_audio5.appendChild(brano_audio5_source);
brano_audio5.loop = false;
brano_audio5.position = new THREE.Vector3(450, 10,-52);
brano_audio5.updateVolume = function() {
	var distance = brano_audio5.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? brano_audio5.volume = 1 - distance / 300 : brano_audio5.volume = 0;
}


var kamehameha_audio = document.createElement('audio');
var kamehameha_audio_source = document.createElement('source');
kamehameha_audio_source.src = 'assets/sounds/kamehameha.mp3';
kamehameha_audio.appendChild(kamehameha_audio_source);
kamehameha_audio.loop = false;


var glass_audio = document.createElement('audio');
var glass_audio_source = document.createElement('source');
glass_audio_source.src = 'assets/sounds/glass2.mp3';
glass_audio.appendChild(glass_audio_source);
glass_audio.loop = false;


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


var switch_light_audio = document.createElement('audio');
var switch_light_audio_source = document.createElement('source');
switch_light_audio_source.src = 'assets/sounds/light_switch.mp3';
switch_light_audio.appendChild(switch_light_audio_source);
switch_light_audio.loop = false;


var guitar_audio = document.createElement('audio');
var guitar_audio_source = document.createElement('source');
guitar_audio_source.src = 'assets/sounds/beat.mp3';
guitar_audio.appendChild(guitar_audio_source);
guitar_audio.loop = false;
guitar_audio.onPlay = false;
guitar_audio.position = new THREE.Vector3(-30, -35, 25);
guitar_audio.updateVolume = function() {
	var distance = guitar_audio.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? guitar_audio.volume = 1 - distance / 300 : guitar_audio.volume = 0;
}


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
	video.src = "assets/videos/Transformers4.mp4";
	video.onPlay = false;
	video.position = new THREE.Vector3(590, 25, -490);


videoImage = document.createElement( 'canvas' );
	videoImage.width = 854;
	videoImage.height = 480;

videoImageContext = videoImage.getContext( '2d' );
	videoImageContext.fillStyle = '#000000';
	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;
video.updateVolume = function() {
	var distance = video.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=400 ? video.volume = 1 - distance / 400 : video.volume = 0;
}



/* Video della televisione in sala */
var movieGeometry = new THREE.PlaneGeometry( 120, 70, 4, 4 );

video1 = document.createElement( 'video' );
	video1.src = "assets/videos/Renzi.mp4";
	video1.onPlay = false;
	video1.position = new THREE.Vector3(560,10,-52);
videoImage1 = document.createElement( 'canvas' );
	videoImage1.width = 854;
	videoImage1.height = 460;
videoImageContext1 = videoImage1.getContext( '2d' );
	videoImageContext1.fillStyle = '#000000';
	videoImageContext1.fillRect( 0, 0, videoImage1.width, videoImage1.height );
videoTexture1 = new THREE.Texture( videoImage1 );
	videoTexture1.minFilter = THREE.LinearFilter;
	videoTexture1.magFilter = THREE.LinearFilter;
video1.updateVolume = function() {
	var distance = video1.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? video1.volume = 1 - distance / 300 : video1.volume = 0;
}


video2 = document.createElement( 'video' );
	video2.src = "assets/videos/Birds.mp4";
	video2.position = new THREE.Vector3(560,10,-52);
	video2.onPlay = false;
videoImage2 = document.createElement( 'canvas' );
	videoImage2.width = 854;
	videoImage2.height = 460;
videoImageContext2 = videoImage2.getContext( '2d' );
	videoImageContext2.fillStyle = '#000000';
	videoImageContext2.fillRect( 0, 0, videoImage2.width, videoImage2.height );
videoTexture2 = new THREE.Texture( videoImage2 );
	videoTexture2.minFilter = THREE.LinearFilter;
	videoTexture2.magFilter = THREE.LinearFilter;
video2.updateVolume = function() {
	var distance = video2.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? video2.volume = 1 - distance / 300 : video2.volume = 0;
}


video3 = document.createElement( 'video' );
	video3.src = "assets/videos/totti.mp4";
	video3.onPlay = false;
	video3.position =new THREE.Vector3(560,10,-52);
videoImage3 = document.createElement( 'canvas' );
	videoImage3.width = 640;
	videoImage3.height = 360;
videoImageContext3 = videoImage3.getContext( '2d' );
	videoImageContext3.fillStyle = '#000000';
	videoImageContext3.fillRect( 0, 0, videoImage3.width, videoImage3.height );
videoTexture3 = new THREE.Texture( videoImage3 );
	videoTexture3.minFilter = THREE.LinearFilter;
	videoTexture3.magFilter = THREE.LinearFilter;
video3.updateVolume = function() {
	var distance = video3.position.distanceTo((!FPenabled) ? renderCamera.position : controls.getObject().position);
	distance<=300 ? video3.volume = 1 - distance / 300 : video3.volume = 0;
}