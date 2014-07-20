function insertFixtures(house) {
	var balconeCameretta = make_Balcony();
		toIntersect.push ( balconeCameretta.children[0].children[0].children[0] );
		toIntersect.push ( balconeCameretta.children[0].children[0].children[0].children[0] );
		toIntersect.push ( balconeCameretta.children[0].children[0].children[0].children[1] );
		balconeCameretta.position.set(-175,-330,40);
		balconeCameretta.rotation.y = Math.PI;
		house.add(balconeCameretta);

	var finestraBagno = make_Single_Window();
		toIntersect.push ( finestraBagno.children[0].children[0].children[0] );
		toIntersect.push ( finestraBagno.children[0].children[0].children[0].children[0] );
		finestraBagno.position.set(95,-330,135);
		finestraBagno.rotation.y = Math.PI;
		house.add(finestraBagno);

	var finestraCamera = make_Triple_Window();
		toIntersect.push ( finestraCamera.children[0].children[1].children[0].children[0] );
		toIntersect.push ( finestraCamera.children[0].children[1].children[0] );
		toIntersect.push ( finestraCamera.children[0].children[0].children[0].children[0] );
		toIntersect.push ( finestraCamera.children[0].children[0].children[0] );
		finestraCamera.position.set(470,-470,135);
		finestraCamera.rotation.y = Math.PI;
		house.add(finestraCamera);

	var balconeSala_1 = make_Balcony();
		toIntersect.push ( balconeSala_1.children[0].children[0].children[0] );
		toIntersect.push ( balconeSala_1.children[0].children[0].children[0].children[0] );
		toIntersect.push ( balconeSala_1.children[0].children[0].children[0].children[1] );
		balconeSala_1.position.set(760,-340,40);
		balconeSala_1.rotation.y = Math.PI;
		house.add(balconeSala_1);

	var finestaSala_1 = make_Double_Window();
		toIntersect.push ( finestaSala_1.children[0].children[1].children[0].children[0] );
		toIntersect.push ( finestaSala_1.children[0].children[0].children[0].children[0] );
		toIntersect.push ( finestaSala_1.children[0].children[1].children[0] );
		toIntersect.push ( finestaSala_1.children[0].children[0].children[0] );
		finestaSala_1.position.set(900,-340,135);
		finestaSala_1.rotation.y = Math.PI;
		house.add(finestaSala_1);

	var balconeSala_2 = make_Balcony();
		toIntersect.push ( balconeSala_2.children[0].children[0].children[0] );
		toIntersect.push ( balconeSala_2.children[0].children[0].children[0].children[0] );
		toIntersect.push ( balconeSala_2.children[0].children[0].children[0].children[1] );
		balconeSala_2.position.set(1050,35,40);
		balconeSala_2.rotation.y = -.5*Math.PI;
		house.add(balconeSala_2);

	var finestaSala_2 = make_Double_Window();
		toIntersect.push ( finestaSala_2.children[0].children[1].children[0].children[0] );
		toIntersect.push ( finestaSala_2.children[0].children[0].children[0].children[0] );
		toIntersect.push ( finestaSala_2.children[0].children[1].children[0] );
		toIntersect.push ( finestaSala_2.children[0].children[0].children[0] );
		finestaSala_2.position.set(1050,-45,135);
		finestaSala_2.rotation.y = -.5*Math.PI;
		house.add(finestaSala_2);

	var finestaCucina = make_Triple_Window();
		toIntersect.push ( finestaCucina.children[0].children[1].children[0].children[0] );
		toIntersect.push ( finestaCucina.children[0].children[1].children[0] );
		toIntersect.push ( finestaCucina.children[0].children[0].children[0].children[0] );
		toIntersect.push ( finestaCucina.children[0].children[0].children[0] );
		finestaCucina.position.set(1210,440,135);
		finestaCucina.rotation.y = -.5*Math.PI;
		house.add(finestaCucina);

	var finestaSalotto = make_Single_Window();
		toIntersect.push ( finestaSalotto.children[0].children[0].children[0] );
		toIntersect.push ( finestaSalotto.children[0].children[0].children[0].children[0] );
		finestaSalotto.position.set(1060,920,135);
		finestaSalotto.rotation.y = -.5*Math.PI;
		house.add(finestaSalotto);


	var balconeSalotto = make_Balcony();
		toIntersect.push ( balconeSalotto.children[0].children[0].children[0] );
		toIntersect.push ( balconeSalotto.children[0].children[0].children[0].children[0] );
		toIntersect.push ( balconeSalotto.children[0].children[0].children[0].children[1] );
		balconeSalotto.position.set(1060,670,40);
		balconeSalotto.rotation.y = -.5*Math.PI;
		house.add(balconeSalotto);
}