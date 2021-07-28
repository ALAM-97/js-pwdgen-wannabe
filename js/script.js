// 1. richiesta nome
var nome = prompt('Digita il tuo nome');
// 2. richiesta cognome
var cognome = prompt('Digita il tuo cognome');
// 3. richiesta colore preferito 
var colore = prompt('Scrivi il tuo colore preferito');
// 4. calcolo password
var password = nome + cognome + colore + '#40';
// 5. scrivo la password nell'html
document.getElementById('your-psw').innerHTML = password;