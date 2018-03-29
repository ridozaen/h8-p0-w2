function balikKata(kata){
    var reverse = "";
    var counter = kata.length;
    while (counter > 0){
      counter = counter - 1;
      reverse = reverse + kata[counter];
    }  
    return reverse;
    
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
  
  