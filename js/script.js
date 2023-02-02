//Ciclo di stampa
for (let i = 0; i < 30; i++) {

    console.log((i + 1), ((i + 1) % 3));
    console.log((i + 1), ((i + 1) % 5));
    console.log((i + 1), ((i + 1) % 15));

    if (((i + 1) % 3) == 0) {
        console.log("Divisibile per 3: " + (i + 1));
    }
    if (((i + 1) % 5) == 0) {
        console.log("Divisibile per 5: " + (i + 1));
    }
    if (((i + 1) % 15) == 0) {
        console.log("Divisibile per 15: " + (i + 1));
    }
}