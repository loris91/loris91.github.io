/**
* @author Lee Stemkoski   http://www.adelphi.edu/~stemkoski/
*/



Examples =
{

	
	// (1) build GUI for easy effects access.
	// (2) write ParticleEngineExamples.js

	 candleDx :
	{
		positionStyle  : Type.SPHERE,
		positionBase   : new THREE.Vector3( 324, 20, -150 ),
		positionRadius : 0.3,
		
		velocityStyle  : Type.SPHERE,
		velocityBase   : new THREE.Vector3(0,100,0),
		velocitySpread : new THREE.Vector3(20,0,20),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/smokeparticle.png' ),
		
		sizeTween    : new Tween( [0, 0.3, 1.2], [20, 150, 1] ),
		opacityTween : new Tween( [0.9, 1.5], [1, 0] ),
		colorTween   : new Tween( [0.5, 1.0], [ new THREE.Vector3(0.02, 1, 0.5), new THREE.Vector3(0.05, 1, 0) ] ),
		blendStyle : THREE.AdditiveBlending,  
		
		particlesPerSecond : 60,
		particleDeathAge   : 1.5,		
		emitterDeathAge    : 3
	},

	 candleSx :
	{
		positionStyle  : Type.SPHERE,
		positionBase   : new THREE.Vector3( 360, 20, -200 ),
		positionRadius : 0.3,
		
		velocityStyle  : Type.SPHERE,
		velocityBase   : new THREE.Vector3(0,100,0),
		velocitySpread : new THREE.Vector3(20,0,20),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/smokeparticle.png' ),
		
		sizeTween    : new Tween( [0, 0.3, 1.2], [20, 150, 1] ),
		opacityTween : new Tween( [0.9, 1.5], [1, 0] ),
		colorTween   : new Tween( [0.5, 1.0], [ new THREE.Vector3(0.02, 1, 0.5), new THREE.Vector3(0.05, 1, 0) ] ),
		blendStyle : THREE.AdditiveBlending,  
		
		particlesPerSecond : 60,
		particleDeathAge   : 1.5,		
		emitterDeathAge    : 3
	}
    
	
}