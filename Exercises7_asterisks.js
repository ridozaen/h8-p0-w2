/*
1. Menyusun Barisan Bintang
*/

var row1 = 5; // input the numbers of rows
var counter1 = 0;

// do loops to display asterisks in the console
while (counter1 < row1) {
  console.log("*");
  counter1 = counter1 + 1;
}

/*
2. Menyusun Barisan Bintang Dengan Nested Looping
*/
var row2 = 5; // input the numbers of rows
var counter2 = 0;
var counter3 = 0;
var asteriks = '';

// do loops to display asterisks in the console
while (counter2 < row2) {

  while (counter3 < row2) {
    asteriks = asteriks + '*';
    counter3 = counter3 + 1
  }
  console.log(asteriks);
  counter2 = counter2 + 1;
}

/*
3. Menyusun Barisan Tangga Bintang
*/
var row3 = 10; // input the numbers of rows
var counter4 = 0;
var counter5 = 0;
var asteriks1 = '';

// do loops to display asterisks in the console
while (counter4 < row3) {
  counter4 = counter4 + 1;
  while (counter5 < counter4){
    asteriks1 = asteriks1 + '*'
    counter5 = counter5 + 1
  }
  console.log(asteriks1);
}
