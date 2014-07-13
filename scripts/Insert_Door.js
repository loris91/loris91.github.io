var portaCameretta = make_White_Door();
	objects.push( portaCameretta.children[1].children[0].children[0] );
	portaCameretta.position.set(5,90,40);
	house.add(portaCameretta);

var portaBagno = make_White_Door();
	objects.push( portaBagno.children[1].children[0].children[0] );
	portaBagno.rotation.z = Math.PI/2;
	portaBagno.position.set(52,5,40);
	house.add(portaBagno);

var portaCamera = make_Double_Door();
	objects.push( portaCamera.children[1].children[0].children[0] );
	objects.push( portaCamera.children[0].children[0].children[0] );
	portaCamera.rotation.z = Math.PI/2;
	portaCamera.position.set(444,5,40);
	house.add(portaCamera);

var portone = make_Security_Door();
	objects.push( portone.children[0].children[0].children[0] );
	portone.rotation.z = Math.PI/2;
	portone.position.set(390.5,145,40);
	house.add(portone);

var portaSala_1 = make_White_Door();
	objects.push( portaSala_1.children[1].children[0].children[0] );
	portaSala_1.rotation.z = Math.PI;
	portaSala_1.position.set(585,70,40);
	house.add(portaSala_1);

var portaSala_2 = make_White_Door();
	objects.push( portaSala_2.children[1].children[0].children[0] );
	portaSala_2.rotation.z = -1.5*Math.PI;
	portaSala_2.position.set(829,145,40);
	house.add(portaSala_2);


var portaCucina = make_White_Door();
	objects.push( portaCucina.children[1].children[0].children[0] );
	portaCucina.position.set(895,200,40);
	portaCucina.rotation.z = Math.PI;
	house.add(portaCucina);

var portaSalotto = make_White_Door();
	objects.push( portaSalotto.children[1].children[0].children[0] );
	portaSalotto.rotation.z = 1.5*Math.PI;
	portaSalotto.position.set(660,545,40);
	house.add(portaSalotto);