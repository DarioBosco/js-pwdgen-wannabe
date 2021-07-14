/*
//Prendo dal form il nome dell'utente e lo tengo come variabile
var userName = document.getElementById('inputName').value;

// Prendo dal form il cognome dell'utente e lo tengo come variabile
var userSurname = document.getElementById('inputSurname').value;

// Prendo dal form il colore preferito dell'utente e lo tengo come variabile
var userFavColor = document.getElementById('inputFavColor').value;

*/
document.getElementById('generatePasswordButton').addEventListener('click', function () {
	document.getElementById('pwdResult').value = 'Password generata: ' + document.getElementById('inputName').value + document.getElementById('inputSurname').value + document.getElementById('inputFavColor').value + '21';
});

function formReset() {
	document.getElementByTagName('form').reset();
}
