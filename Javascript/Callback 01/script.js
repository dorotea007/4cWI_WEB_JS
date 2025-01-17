function erledigeAufgabe(callback) {
    console.log("1. Aufgabe wird erledigt...");
    callback();
  }
  
  function zeigeNachricht() {
    console.log("2. Aufgabe ist erledigt!");
  }
  
  // Aufrufen
  erledigeAufgabe(zeigeNachricht);
  