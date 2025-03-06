if (true) {
    var varVariable = 'This is true'  // 'var' ist außerhalb des Blocks sichtbar
}

var varVariable = 'This is false' // Überschreibt vorherigen Wert

console.log(varVariable); // 'This is false'

//---------------------------------------------------------------
let letVariable = 'true' 
let letVariable = 'false'   // Fehler 'let' kann nicht doppelt deklariert werden

//---------------------------------------------------------------
if (true) {
    let letVariable = 'This is true' // Gültig nur innerhalb dieses Blocks
    console.log(letVariable);  // 'This is true'
}

console.log(letVariable); 

//---------------------------------------------------------------
const constVar = 1; // 'const' ist fest und kann nicht verändert werden	
let letVar = 1; // 'let' kann verändert werden

letVar = 2; 
const constVar = 2; // Fehler 'const' kann nicht doppelt deklariert werden

console.log(constVar); 
//----------------------------------------------------------------
const constVar = {name: 'Bob'} // 'constVar' speichert ein Objekt.
let letVar = 1 //'letVar' wird mit 1 deklariert.

constVar.name = 'sally' // Objekt kann verändert werden

console.log(constVar); // {name: 'sally'}