// Aufgabe 1

	/*Erstelle ein Array mit folgenden Werten:
	4,1,2,3*/
    let array = [4, 1, 2, 3];

	//Füge die Werte 17 und 199 dazu*/
    array.push(17, 199);
	
	// alle Werte in einer Schleife ausgeben
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

	// alle Werte zusammenzählen und das Ergebnis ausgeben
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("Die Summe ist:", sum);

    // Aufgabe 2 

    /* Erstelle ein Array mit folgenden Strings:
	"Susi", "Paula", "Hans"*/
	let friends = ["Susi", "Paula", "Hans"];

	/*Gib folgenden Satz aus:
	"Meine Freunde sind Susi, Paula und Hans*/
	console.log("Meine Freunde sind " + friends.join(", ") + ".");

	/*Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
    "Meine Freunde sind Susi, Paula, Hans und Sepp"*/
    friends.push("Sepp");
    console.log("Meine Freunde sind " + friends.join(", ") + ".");

    