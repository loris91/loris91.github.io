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


/* Funzione che ritorna un oggetto 3D da un file obj e mtl e l'ho aggiunge ad un oggetto passato */
function loadModel2(name, obj, scale, posX, posY, posZ, rotX, rotY) {
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event) {

    var object = event.content;

    object.scale.set(scale, scale, scale);
    obj.add(object);

    object.rotation.x = Math.PI/2 * rotX;
    object.rotation.y = Math.PI * rotY;

    object.position.set(posX,posY,posZ);
  });


  loader.load(
    'assets/models/'+ name + '.obj', 
    'assets/models/'+ name +'.mtl', 
    {side: THREE.DoubleSide}
  );
};


/* Funzione che ritorna la gestione delle luci */
function makeInternalLight(switcher, posX, posY, posZ) {
  var light = new THREE.PointLight(0xeeeeaa, 0, 300);
  light.position.set(posX,posY,posZ);
  var target = new THREE.Object3D();
  target.position.set(posX,posY,0);
  light.target = target;
  switcher.add(light);
  switcher.inactive = true;
  
  switcher.interact = function() {
    if (switcher.inactive) {
      switch_light_audio.play();
      light.intensity = 2;
      switcher.inactive = false;
    } else {
      switch_light_audio.play();
      light.intensity = 0;
      switcher.inactive = true;
    }
  }
}


function getOra() {
  var data = new Date();
  var h = data.getHours();
  var m = data.getMinutes(); 

  var text_Material = new THREE.MeshPhongMaterial({color: 0x0000ff});        
  var options = {
    size: 5,
    height: 2,
    font: "helvetiker",
    weight: "normal",
    curveSegments: 20
  };        
  var text_Geo = new THREE.TextGeometry(h + " : " + m, options);
  var text = new THREE.Mesh(text_Geo, text_Material); 

  text.rotation.x = Math.PI * 0.40;      
  text.position.set(-15,-5,2);
  return (text);
}