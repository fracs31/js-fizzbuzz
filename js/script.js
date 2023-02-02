//Ciclo di stampa
for (let i = 0; i < 100; i++) {
    //Se il numero è divisibile solo per 3, ma non per 5
    if (((i + 1) % 3) == 0 && ((i + 1) % 5) != 0) {
        console.log("Fizz: " + (i + 1)); //stampa
    } else if (((i + 1) % 3) != 0 && ((i + 1) % 5) == 0) { //Se il numero è divisibile solo per 5, ma non per 3
        console.log("Buzz: " + (i + 1)); //stampa
    } else if (((i + 1) % 3) == 0 && ((i + 1) % 5) == 0) { //Se il numero è divisibile sia per 3 sia per 5
        console.log("FizzBuzz: " + (i + 1)); //stampa
    }
}