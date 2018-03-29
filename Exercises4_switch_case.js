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

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        console.log('Masukan format tanggal yg benar!');
        break;
}

console.log(tanggal + ' ' + bulan + ' ' + tahun);