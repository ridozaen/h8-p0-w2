/*
excercise 4 : 
convert number of month into month name
please input manually using number.
eg: tanggal = 1, bulan = 1, tahun = 1945
expected result : 1 Januari 1945
*/

var tanggal = 1;
var bulan = 1;
var tahun = 1945;
var namaBulan = '';

switch (bulan) {
    case 1:
        namaBulan = 'Januari';
        break;
    case 2:
        namaBulan = 'Februari';
        break;
    case 3:
        namaBulan = 'Maret';
        break;
    case 4:
        namaBulan = 'April';
        break;
    case 5:
        namaBulan = 'Mei';
        break;
    case 6:
        namaBulan = 'Juni';
        break;
    case 7:
        namaBulan = 'Juli';
        break;
    case 8:
        namaBulan = 'Agustus';
        break;
    case 9:
        namaBulan = 'September';
        break;
    case 10:
        namaBulan = 'Oktober';
        break;
    case 11:
        namaBulan = 'November';
        break;
    case 12:
        namaBulan = 'Desember';
        break;
    default:
        console.log('Masukan format tanggal yg benar!');
        break;
}

console.log (tanggal + ' ' + namaBulan + ' ' + tahun);