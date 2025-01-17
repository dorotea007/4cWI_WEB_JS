function bereiteVor(callback) {
    console.log("1. Vorbereitung läuft...");
    setTimeout(() => {
      console.log("2. Vorbereitung abgeschlossen.");
      callback();
    }, 1000);
  }
  
  function starteAufgabe(callback) {
    console.log("3. Aufgabe wird gestartet...");
    setTimeout(() => {
      console.log("4. Aufgabe abgeschlossen.");
      callback();
    }, 1000);
  }
  
  function beendeProzess() {
    console.log("5. Prozess beendet!");
  }
  
  // Verschachtelte Callbacks
  bereiteVor(() => {
    starteAufgabe(() => {
      beendeProzess();
    });
  });
  