//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];


function makeSkyBox(name) {
	var directions = ["right", "left", "top", "down", "front", "back"];

	var materialArray = [];
	for (var i = 0; i < 6; i++)
	  materialArray.push(new THREE.MeshBasicMaterial({
	    map: THREE.ImageUtils.loadTexture("assets/textures/skybox/" + name + directions[i] + ".jpg"),
	    side: THREE.BackSide
	  }));
	var skybox_material = new THREE.MeshFaceMaterial(materialArray);
	var skybox = new THREE.Mesh(new THREE.BoxGeometry(5000, 3000, 5000), skybox_material);
		skybox.color = new THREE.Color('#FFFFFF');
		skybox.rotation.x = Math.PI/2;
		skybox.position.z = 1535;
	return skybox;
}