var jam = 0;
var minutes = "";
function konversiMenit(menit){ 
  minutes = menit%60;
  if (menit >= 60){
    jam = (menit - minutes)/60;
  }else {
    jam = 0
  }
  //determine minutes
  if (minutes.toString().length === 1){
    minutes = "0" + minutes;
  }
  return jam + ":" + minutes;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

