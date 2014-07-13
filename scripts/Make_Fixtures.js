<!-- Funzione che ritorna una finestra con una sola anta -->
function make_Single_Window() {

  var finestra = new THREE.Object3D();

  var shape1 = new THREE.Shape();
    shape1.moveTo(0,0);
    shape1.lineTo(70,0);
    shape1.lineTo(70,130);
    shape1.lineTo(0,130);
    shape1.lineTo(0,0);
  var hole1 = new THREE.Path();
    hole1.moveTo(5,5);
    hole1.lineTo(65,5);
    hole1.lineTo(65,125);
    hole1.lineTo(5,125);
    hole1.lineTo(5,5);
  shape1.holes.push(hole1);
  var option1 = {
    amount: 10,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };


  var shape2 = new THREE.Shape();
    shape2.moveTo(5,5);
    shape2.lineTo(65,5);
    shape2.lineTo(65,125);
    shape2.lineTo(5,125);
    shape2.lineTo(5,5);
  var hole2 = new THREE.Path();
    hole2.moveTo(10,10);
    hole2.lineTo(60,10);
    hole2.lineTo(60,120);
    hole2.lineTo(10,120);
    hole2.lineTo(10,10);
  shape2.holes.push(hole2);
  var option2 = {
    amount: 8,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };

  var material_alluminio = new THREE.MeshPhongMaterial(
    { specular: 0xffffff, color: 0xCD7F32, shininess: 100, metal: true });
  var material_vetro = new THREE.MeshLambertMaterial({ color: 0x99CBFF, opacity: 0.3, transparent: true });

  var geometry1 = new THREE.ExtrudeGeometry(shape1,option1);
  var corniceEsterna = new THREE.Mesh(geometry1,material_alluminio);

  var geometry2 = new THREE.ExtrudeGeometry(shape2,option2);
  var corniceInterna = new THREE.Mesh(geometry2,material_alluminio);

  var glass = new THREE.Mesh( new THREE.BoxGeometry(50,110,4), material_vetro);

  var hook = new THREE.Object3D();


  finestra.add(corniceEsterna);
  corniceEsterna.add(hook);
  finestra.hook = hook;
  finestra.rotation.x = Math.PI/2;
  finestra.rotation.y = Math.PI/2;
  finestra.isClose = true;


  hook.add(corniceInterna);
  hook.position.set(68,75,5);

  corniceInterna.position.set(-68,-75,-4);

  corniceInterna.add(glass);
  glass.position.set(35,65,3);

  finestra.animate = function() {
    if(this.isClose) {
      this.open_window.start();
      this.isClose = false;
    } else {
      this.close_window.start();
      this.isClose = true;
    }
  }


  glass.animate = function() {
    finestra.animate();
  };

  corniceInterna.animate = function() {
    finestra.animate();
  }

  finestra.open_window = new TWEEN.Tween(finestra.hook.rotation)
   .to({ y: 0.5*Math.PI}, 1000)

  finestra.close_window = new TWEEN.Tween(finestra.hook.rotation)
   .to({ y: 0*Math.PI}, 1000)


  return finestra;  
}





<!-- Funzione che ritorna una finestra con due ante -->
function make_Double_Window() {

  var finestra = new THREE.Object3D();

  var shape1 = new THREE.Shape();
    shape1.moveTo(0,0);
    shape1.lineTo(140,0);
    shape1.lineTo(140,130);
    shape1.lineTo(0,130);
    shape1.lineTo(0,0);
  var hole1 = new THREE.Path();
    hole1.moveTo(5,5);
    hole1.lineTo(135,5);
    hole1.lineTo(135,125);
    hole1.lineTo(5,125);
    hole1.lineTo(5,5);
  shape1.holes.push(hole1);
  var option1 = {
    amount: 10,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };


  var shape2 = new THREE.Shape();
    shape2.moveTo(5,5);
    shape2.lineTo(70,5);
    shape2.lineTo(70,125);
    shape2.lineTo(5,125);
    shape2.lineTo(5,5);
  var hole2 = new THREE.Path();
    hole2.moveTo(10,10);
    hole2.lineTo(65,10);
    hole2.lineTo(65,120);
    hole2.lineTo(10,120);
    hole2.lineTo(10,10);
  shape2.holes.push(hole2);
  var option2 = {
    amount: 8,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };

  var material_alluminio = new THREE.MeshPhongMaterial(
    { specular: 0xffffff, color: 0xCD7F32, shininess: 100, metal: true });
  var material_vetro = new THREE.MeshLambertMaterial({ color: 0x99CBFF, opacity: 0.3, transparent: true });

  var geometry1 = new THREE.ExtrudeGeometry(shape1,option1);
  var corniceEsterna = new THREE.Mesh(geometry1,material_alluminio);

  var geometry2 = new THREE.ExtrudeGeometry(shape2,option2);
  var antaDx = new THREE.Mesh(geometry2,material_alluminio);
  var antaSx = new THREE.Mesh(geometry2,material_alluminio);

  var glassDx = new THREE.Mesh( new THREE.BoxGeometry(55,110,4), material_vetro);
  var glassSx = new THREE.Mesh( new THREE.BoxGeometry(55,110,4), material_vetro);

  var hookDx = new THREE.Object3D();
  var hookSx = new THREE.Object3D();


  finestra.add(corniceEsterna);
  corniceEsterna.add(hookDx);
  corniceEsterna.add(hookSx);
  finestra.hookDx = hookDx;
  finestra.hookSx = hookSx;
  finestra.rotation.x = Math.PI/2;
  finestra.rotation.y = Math.PI/2;


  hookDx.add(antaDx);
  hookDx.position.set(138,75,5);
  antaDx.position.set(-73,-75,-4);
  antaDx.add(glassDx);
  glassDx.position.set(37.5,65,3);
  antaDx.isClose = true;


  hookSx.add(antaSx);
  hookSx.position.set(2,75,5);
  antaSx.position.set(-2,-75,-4);
  antaSx.add(glassSx);
  glassSx.position.set(37.5,65,3);
  antaSx.isClose = true;


  glassDx.animate = function() {
    antaDx.animate();
  }

  antaDx.animate = function() {
    if(this.isClose) {
      this.open_antaDx.start();
      this.isClose = false;
    } else {
      this.close_antaDx.start();
      this.isClose = true;
    }
  }

  glassSx.animate = function() {
    antaSx.animate();
  }

  antaSx.animate = function() {
    if(this.isClose) {
      this.open_antaSx.start();
      this.isClose = false;
    } else {
      this.close_antaSx.start();
      this.isClose = true;
    }
  }

  antaDx.open_antaDx = new TWEEN.Tween(finestra.hookDx.rotation)
   .to({ y: 0.5*Math.PI}, 1000)

  antaDx.close_antaDx = new TWEEN.Tween(finestra.hookDx.rotation)
   .to({ y: 0*Math.PI}, 1000)

  antaSx.open_antaSx = new TWEEN.Tween(finestra.hookSx.rotation)
   .to({ y: -0.5*Math.PI}, 1000)

  antaSx.close_antaSx = new TWEEN.Tween(finestra.hookSx.rotation)
   .to({ y: 0*Math.PI}, 1000)


  return finestra;  
}



<!-- Funzione che ritorna una finestra con tre ante, di cui due mobili -->
function make_Triple_Window() {

  var finestra = new THREE.Object3D();

  var shape1 = new THREE.Shape();
    shape1.moveTo(0,0);
    shape1.lineTo(220,0);
    shape1.lineTo(220,130);
    shape1.lineTo(0,130);
    shape1.lineTo(0,0);
  var hole1 = new THREE.Path();
    hole1.moveTo(5,5);
    hole1.lineTo(215,5);
    hole1.lineTo(215,125);
    hole1.lineTo(5,125);
    hole1.lineTo(5,5);
  shape1.holes.push(hole1);
  var option1 = {
    amount: 10,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };


  var shape2 = new THREE.Shape();
    shape2.moveTo(5,5);
    shape2.lineTo(75,5);
    shape2.lineTo(75,125);
    shape2.lineTo(5,125);
    shape2.lineTo(5,5);
  var hole2 = new THREE.Path();
    hole2.moveTo(10,10);
    hole2.lineTo(70,10);
    hole2.lineTo(70,120);
    hole2.lineTo(10,120);
    hole2.lineTo(10,10);
  shape2.holes.push(hole2);
  var option2 = {
    amount: 8,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };

  var material_alluminio = new THREE.MeshPhongMaterial(
    { specular: 0xffffff, color: 0xCD7F32, shininess: 100, metal: true });
  var material_vetro = new THREE.MeshLambertMaterial({ color: 0x99CBFF, opacity: 0.3, transparent: true });

  var geometry1 = new THREE.ExtrudeGeometry(shape1,option1);
  var corniceEsterna = new THREE.Mesh(geometry1,material_alluminio);

  var geometry2 = new THREE.ExtrudeGeometry(shape2,option2);
  var antaDx = new THREE.Mesh(geometry2,material_alluminio);
  var antaSx = new THREE.Mesh(geometry2,material_alluminio);
  var antaFissa = new THREE.Mesh(geometry2,material_alluminio);

  var glassDx = new THREE.Mesh( new THREE.BoxGeometry(60,110,4), material_vetro);
  var glassSx = new THREE.Mesh( new THREE.BoxGeometry(60,110,4), material_vetro);
  var glassFisso = new THREE.Mesh( new THREE.BoxGeometry(60,110,4), material_vetro);

  var hookDx = new THREE.Object3D();
  var hookSx = new THREE.Object3D();


  finestra.add(corniceEsterna);
  corniceEsterna.add(hookSx);
  corniceEsterna.add(hookDx);
  corniceEsterna.add(antaFissa);
  finestra.hookDx = hookDx;
  finestra.hookSx = hookSx;
  finestra.rotation.x = Math.PI/2;
  finestra.rotation.y = Math.PI/2;

  hookSx.add(antaSx);
  hookSx.position.set(2,75,5);
  antaSx.position.set(-2,-75,-4);
  antaSx.add(glassSx);
  glassSx.position.set(40,65,3);
  antaSx.isClose = true;

  hookDx.add(antaDx);
  hookDx.position.set(147,75,5);
  antaDx.position.set(-77,-75,-4);
  antaDx.add(glassDx);
  glassDx.position.set(40,65,3);
  antaDx.isClose = true;


  antaFissa.add(glassFisso);
  antaFissa.position.set(140,0,1);
  glassFisso.position.set(40,65,3);


  glassDx.animate = function() {
    antaDx.animate();
  }

  antaDx.animate = function() {
    if(this.isClose) {
      this.open_antaDx.start();
      this.isClose = false;
    } else {
      this.close_antaDx.start();
      this.isClose = true;
    }
  }

  glassSx.animate = function() {
    antaSx.animate();
  }

  antaSx.animate = function() {
    if(this.isClose) {
      this.open_antaSx.start();
      this.isClose = false;
    } else {
      this.close_antaSx.start();
      this.isClose = true;
    }
  }

  antaDx.open_antaDx = new TWEEN.Tween(finestra.hookDx.rotation)
   .to({ y: 0.9*Math.PI}, 1800)

  antaDx.close_antaDx = new TWEEN.Tween(finestra.hookDx.rotation)
   .to({ y: 0*Math.PI}, 1800)

  antaSx.open_antaSx = new TWEEN.Tween(finestra.hookSx.rotation)
   .to({ y: -0.5*Math.PI}, 1000)

  antaSx.close_antaSx = new TWEEN.Tween(finestra.hookSx.rotation)
   .to({ y: 0*Math.PI}, 1000)


  return finestra;  
}



<!-- Funzione che ritorna un balcone -->
function make_Balcony() {

  var balcone = new THREE.Object3D();

  var shape1 = new THREE.Shape();
    shape1.moveTo(0,0);
    shape1.lineTo(80,0);
    shape1.lineTo(80,225);
    shape1.lineTo(0,225);
    shape1.lineTo(0,0);
  var hole1 = new THREE.Path();
    hole1.moveTo(5,5);
    hole1.lineTo(75,5);
    hole1.lineTo(75,220);
    hole1.lineTo(5,220);
    hole1.lineTo(5,5);
  shape1.holes.push(hole1);
  var option1 = {
    amount: 10,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };


  var shape2 = new THREE.Shape();
    shape2.moveTo(5,5);
    shape2.lineTo(75,5);
    shape2.lineTo(75,220);
    shape2.lineTo(5,220);
    shape2.lineTo(5,5);
  var hole2_1 = new THREE.Path();
    hole2_1.moveTo(10,10);
    hole2_1.lineTo(70,10);
    hole2_1.lineTo(70,110);
    hole2_1.lineTo(10,110);
    hole2_1.lineTo(10,10);
  var hole2_2 = new THREE.Path();
    hole2_2.moveTo(10,115);
    hole2_2.lineTo(70,115);
    hole2_2.lineTo(70,215);
    hole2_2.lineTo(10,215);
    hole2_2.lineTo(10,115);
  shape2.holes.push(hole2_1);
  shape2.holes.push(hole2_2);
  var option2 = {
    amount: 8,
    bevelThickness: 10,
    curveSegments: 30,
    steps: 100,
    bevelEnabled: false
  };

  var material_alluminio = new THREE.MeshPhongMaterial(
    { specular: 0xffffff, color: 0xCD7F32, shininess: 100, metal: true });
  var material_vetro = new THREE.MeshLambertMaterial({ color: 0x99CBFF, opacity: 0.3, transparent: true });

  var geometry1 = new THREE.ExtrudeGeometry(shape1,option1);
  var corniceEsterna = new THREE.Mesh(geometry1,material_alluminio);

  var geometry2 = new THREE.ExtrudeGeometry(shape2,option2);
  var anta = new THREE.Mesh(geometry2,material_alluminio);


  var glassUp = new THREE.Mesh( new THREE.BoxGeometry(70,100,4), material_vetro);
  var glassDown = new THREE.Mesh( new THREE.BoxGeometry(70,100,4), material_vetro);

  var hook = new THREE.Object3D();


  balcone.add(corniceEsterna);
  corniceEsterna.add(hook);
  balcone.hook = hook;
  balcone.rotation.x = Math.PI/2;
  balcone.rotation.y = Math.PI/2;
  balcone.isClose = true;

  hook.add(anta);
  hook.position.set(77,110,5);
  anta.position.set(-77,-110,-4);
  anta.add(glassUp);
  glassUp.position.set(40,60,3);
  anta.add(glassDown);
  glassDown.position.set(40,165,3);


  glassUp.animate = function() {
    balcone.animate();
  }

  glassDown.animate = function() {
    balcone.animate();
  }

  anta.animate = function() {
    balcone.animate();
  }

  balcone.animate = function() {
    if(this.isClose) {
      this.open_balcony.start();
      this.isClose = false;
    } else {
      this.close_balcony.start();
      this.isClose = true;
    }
  } 

  balcone.open_balcony = new TWEEN.Tween(balcone.hook.rotation)
   .to({ y: 0.5*Math.PI}, 1000)

  balcone.close_balcony = new TWEEN.Tween(balcone.hook.rotation)
   .to({ y: 0*Math.PI}, 1000)


  return balcone;  
}