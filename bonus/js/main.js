document.getElementById('generatePasswordButton').addEventListener('click', function () {
	var userName = document.getElementById('inputName').value;
	var userSurname = document.getElementById('inputSurname').value;
	var userFavColor = document.getElementById('inputFavColor').value;
	document.getElementById('pwdResult').value = 'Password generata: ' + userName + userSurname + userFavColor + '21';
});

function formReset() {
	document.getElementByTagName('form').reset();
}
