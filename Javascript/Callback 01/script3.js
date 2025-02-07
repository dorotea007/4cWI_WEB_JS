function orderPizza(pizzaName, callback) {
    console.log(`Ich bestelle eine ${pizzaName}`);
    
    setTimeout(() => { 
      const preis = Math.random() * 10 + 5; 
      callback(preis.toFixed(2)); 
    }, 2000); 
  }
  
  // Beispiel-Callback
  function zeigePreis(preis) {
    console.log(`Die Pizza ist fertig! Der Preis beträgt: ${preis} €`);
  }
  
  orderPizza("Margherita", zeigePreis);
 
  