var result;
function bandingkanAngka(angka1, angka2){
    if (angka2 === angka1){
      result = -1;
    }else{
      result = angka2 > angka1;
    }
    return result;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
