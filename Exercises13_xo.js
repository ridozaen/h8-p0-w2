
function xo(str) {
    var counter= 0;
    var countX = 0;
    var countO = 0;
    while(counter < str.length){
      if (str[counter] === 'x'){
        countX++;
      }
      else if (str[counter] === 'o'){
        countO++;
      }
      counter = counter + 1
    }
    return countX == countO;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  