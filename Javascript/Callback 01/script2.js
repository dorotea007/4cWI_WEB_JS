function Decider(zahl, callback) {
    if (zahl > 100) {
      callback(); // Callback wird nur aufgerufen, wenn die Zahl > 100 ist
    }
  }
  
  // Beispiel-Callback
  function zeigeNachricht() {
    console.log("Die Zahl ist größer wie 100");
  }
  
 
  Decider(150, zeigeNachricht); 
  Decider(50, zeigeNachricht); 
  