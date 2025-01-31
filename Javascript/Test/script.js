//Aufgabe 3)
let sum = 0;

for (let i = 7; i < 344; i++) {
    if (i % 2 === 0) { 
        if (i % 12 === 0) { 
            sum += i * 3; 
        } else {
            sum += i; 
        }
    }
}

console.log(sum);
console.log("-------------------------------------");

//Aufgabe 2)
let data = "Super Duper".split("");
let text = ""; 

for (let i = 0; i < data.length; i++) {
    if ("ue".includes(data[i])) {  
        text += "x"; 
    } else {
        text += data[i]; 
    }
}

console.log(text);
console.log("-------------------------------------");

// AUfgabe 3
let num = 100; 

while (num >= 25) { 
    if (num !== 50 && num !== 40 && num !== 30) { 
        console.log(num);
    }
    num -= 5; 
}
