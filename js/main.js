// Chiedo all'utente il suo nome e lo tengo come variabile
var name = prompt('Inserisci il tuo nome');

// Chiedo all'utente il suo cognome e lo tengo come variabile
var surname = prompt('Inserisci il tuo cognome');

// Chiedo all'utente il suo colore preferito e lo tengo come variabile
var favColor = prompt('Inserisci il tuo colore preferito');

document.getElementById('pwdResult').innerHTML = 'Password generata: ' + name + surname + favColor + '21';
