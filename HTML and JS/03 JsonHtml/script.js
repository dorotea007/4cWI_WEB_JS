let data = [
    { firstname: 'Niki', lastname: 'Milic', points: 25 },
    { firstname: 'Pino', lastname: 'Perez', points: 32 },
    { firstname: 'Anna', lastname: 'Garcia', points: 23 },
    { firstname: 'Luna', lastname: 'Maier', points: 29 },
];


function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();