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


/* Funzione che ritorna un oggetto 3D da un file obj */
function makeRoom(path,callback) {
  var mesh;

  var loader = new THREE.OBJLoader();
  loader.load(path, function (obj) {

    global_o = obj;

    var multiMaterial = [
	  new THREE.MeshLambertMaterial({color: 0xefefef, side: THREE.DoubleSide}),
	  new THREE.MeshBasicMaterial({wireframe: false, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
	  ];

    mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
    callback(mesh);
  });
}

/* Funzione che ritorna un oggetto 3D da un file obj e mtl */
function loadModel(name, scale, posX, posY, posZ, rot) {
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;

    object.scale.set(scale, scale, scale);
    house.add(object);

    object.rotation.x = Math.PI/2;
    object.rotation.y = Math.PI * rot;

    object.position.set(posX,posY,posZ);
  });


  loader.load(
    'assets/models/'+ name + '.obj', 
    'assets/models/'+ name +'.mtl', 
    {side: THREE.DoubleSide}
  );
};