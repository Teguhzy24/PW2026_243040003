import formatRupiah from './formatRupiah';

// Komponen ini hanya menampilkan angka yang dihitung oleh App
function RingkasanSaldo({ pemasukan, pengeluaran, saldo }) {
  return (
    <div className="ringkasan">
      <div>
        <small>Pemasukan</small>
        <p className="hijau">{formatRupiah(pemasukan)}</p>
      </div>
      <div>
        <small>Pengeluaran</small>
        <p className="merah">{formatRupiah(pengeluaran)}</p>
      </div>
      <div>
        <small>Saldo</small>
        <p className={saldo < 0 ? 'merah' : ''}>{formatRupiah(saldo)}</p>
      </div>
    </div>
  );
}

export default RingkasanSaldo;