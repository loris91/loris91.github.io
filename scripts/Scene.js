//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];

/* Funzione che ritorna una mesh con texture */
function createMesh(geom, imageFile, bump, mapping, mapX, mapY) {
	var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile)
	geom.computeVertexNormals();
	var mat = new THREE.MeshPhongMaterial();
	mat.map = texture;

	if (bump) {
	  var bump = THREE.ImageUtils.loadTexture("assets/textures/" + bump)
	  mat.bumpMap = bump;
	  mat.bumpScale = 0.2;
	}
	
	var mesh = new THREE.Mesh(geom, mat);

	if (mapping) {
		mesh.material.map.repeat.set(mapX,mapY);
		mesh.material.map.wrapS = THREE.RepeatWrapping;
		mesh.material.map.wrapT = THREE.RepeatWrapping; 
	}

	return mesh;
}


/* Funzione che ritorna una skyBox da aggiungere alla scena */
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
		skybox.position.z = 1529;
	return skybox;
}


/* Funzione che ritorna un piano per il giardino */
function makeGrass() {
	var plane = createMesh(new THREE.PlaneGeometry(5000,5000,50,50), "grass.jpg", "grass_bump.jpg", true, 5, 5);
	return plane;
}


/* Funzione che ritorna le luci esterne alla casa */
function makeEsternalLights() {
	var axhel = new THREE.AxisHelper(1000);
	var esternalLights = new THREE.Object3D();
	var light1 = new THREE.PointLight(0xffff00, 0,1000);
		light1.position.set(-800, -800, 230);
	var light2 = new THREE.PointLight(0xffff00, 0, 1000);
		light2.position.set(-800, 1200, 230);
	var light3 = new THREE.PointLight(0xffff00, 0, 1000);
		light3.position.set(300, -800, 230);
	var light4 = new THREE.PointLight(0xffff00, 0, 1000);
		light4.position.set(300, 1200, 230);
	var light5 = new THREE.PointLight(0xffff00, 0, 1000);
		light5.position.set(1400, -800, 230);
	var light6 = new THREE.PointLight(0xffff00, 0, 1000);
		light6.position.set(1400, 1200, 230);
	var light7 = new THREE.PointLight(0xffff00, 0, 1000);
		light7.position.set(-800, 0, 230);
	var light8 = new THREE.PointLight(0xffff00, 0, 1000);
		light8.position.set(1400, 0, 230);
	esternalLights.add(light1);	esternalLights.add(light2);
	esternalLights.add(light3);	esternalLights.add(light4);
	esternalLights.add(light5);	esternalLights.add(light6);
	esternalLights.add(light7);	esternalLights.add(light8);

	esternalLights.spegni = function() {
		console.log("spegni luci");
		light1.intensity = light2.intensity = light3.intensity = light4.intensity = 0;
		light5.intensity = light6.intensity = light7.intensity = light8.intensity = 0;
		console.log(light7.intensity);
	}
	esternalLights.accendi = function() {
		console.log("accendi luci");
		light1.intensity = light2.intensity = light3.intensity = light4.intensity = 2;
		light5.intensity = light6.intensity = light7.intensity = light8.intensity = 2;
		console.log(light7.intensity);
	}
	return esternalLights;
}