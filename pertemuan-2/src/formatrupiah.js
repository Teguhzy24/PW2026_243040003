// Mengubah angka menjadi format rupiah, contoh: 5000 -> "Rp 5.000"
function formatRupiah(angka) {
  const teks = Math.abs(angka).toLocaleString('id-ID');
  return angka < 0 ? '-Rp ' + teks : 'Rp ' + teks;
}

export default formatRupiah;