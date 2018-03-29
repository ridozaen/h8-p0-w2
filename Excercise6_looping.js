/*
1. Looping while
*/
var counter = 0;

console.log ("LOOPING PERTAMA");

while (counter < 20 ){
    counter = counter + 2;
    console.log (counter + " - I love coding");
}

console.log ("LOOPING KEDUA");
while (counter > 0){
   console.log(counter + " - I will become fullstack developer");
   counter = counter - 2;
}

/*
2. Looping For
*/


console.log ("LOOPING PERTAMA");

for (var count = 1 ; count <= 20; count++){
    console.log(count + " - I love coding");
}

console.log ("LOOPING KEDUA");
for (var count = 20 ; count > 0; count--){
    console.log(count + " - I will become fullstack developer");
}

/*
3. Ganjil Genap
*/

var counter1 = 1;

while (counter1 <= 100){
    if (counter1 % 2){
        console.log (counter1 + " - GANJIL");
    } 
    else{
        console.log (counter1 + " - GENAP");
    }

    counter1 = counter1 + 1;
}

// 3 keliapatan 3
var counter2 = 1;
while (counter2 <= 100){
    if (counter2 % 3){
        console.log (counter2 + " - ");
    } 
    else{
        console.log (counter2 + " - 3 KELIPATAN 3");
    }

    counter2 = counter2 + 2;
}

// 6 kelipatan 6

var counter3 = 1;
while (counter3 <= 100){
    if (counter3 % 6){
        console.log (counter3 + " - ");
    } 
    else{
        console.log (counter3 + " - 6 KELIPATAN 6");
    }

    counter3 = counter3 + 5;
}

// 10 kelipatan 10

var counter4 = 1;
while (counter4 <= 100){
    if (counter4 % 10){
        console.log (counter4 + " - ");
    } 
    else{
        console.log (counter4 + " - 10 KELIPATAN 10");
    }

    counter4 = counter4 + 9;
}