document.write('<script src="scripts/Painting_Rooms/Painting_Outside.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Cameretta.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Corridoio_1.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Bagno.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Camera.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Sala.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Corridoio_2.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Cucina.js"></script>');
document.write('<script src="scripts/Painting_Rooms/Painting_Salotto.js"></script>');

function paintingHouse(house) {
	paintingCorridoio2(house);
	paintingCorridoio1(house);
	paintingCamera(house);
	paintingCameretta(house);
	paintingCucina(house);
	paintingSala(house);
	paintingSalotto(house);
	paintingOutside(house);
	paintingBagno(house);
}