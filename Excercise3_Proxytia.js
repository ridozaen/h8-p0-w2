/*
enter manualy variable nama and peran.
input example:
var nama = 'Malik';
var peran = 'Tabib';
*/

var nama = 'Simbah';
var peran = 'Penyihir';

if (!nama) {
    console.log("Nama Harus Diisi!");
}
else if (!peran) {
    console.log('Halo ' + nama + ', ' + "Pilih peranmu untuk memulai game!");
} else if (peran === "Ksatria") {
    console.log("Selamat datang di dunia Proxytia, " + nama);
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (peran === "Tabib") {
    console.log("Selamat datang di dunia Proxytia, " + nama);
    console.log("Halo Tabib " + nama + ", kamu dapat membantu temanmu yang terluka.");
} else if (peran === "Penyihir") {
    console.log("Selamat datang di dunia Proxytia, " + nama);
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}
