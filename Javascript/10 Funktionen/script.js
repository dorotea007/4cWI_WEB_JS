function printEasterDate(year) {
    let n = year - 1900;
    let a = n % 19;
    let b = ((7 * a + 1) / 19);
    let m = (11 * a + 4 - b) % 29;
    let q = Math.floor (n / 4);
    let w = (n + q + 31 - m) % 7;
    let p = Math.floor (25 - m - w);

    if (p > 0) {
        console.log("Ostersonntag ist der " +  p  + " April");
    }
    else {
        console.log("Ostersonntag ist der" + (p + 31) + "März")
    }
}

printEasterDate(2023)