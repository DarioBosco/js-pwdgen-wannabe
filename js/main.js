// Chiedo all'utente il suo nome e lo tengo come variabile
var userName = prompt('Inserisci il tuo nome');

// Chiedo all'utente il suo cognome e lo tengo come variabile
var userSurname = prompt('Inserisci il tuo cognome');

// Chiedo all'utente il suo colore preferito e lo tengo come variabile
var UserFavColor = prompt('Inserisci il tuo colore preferito');

document.getElementById('pwdResult').innerHTML = 'Password generata: ' + userName + userSurname + UserFavColor + '21';
