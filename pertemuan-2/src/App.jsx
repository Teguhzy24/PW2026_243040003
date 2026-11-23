import { useState, useEffect } from 'react';
import './App.css';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';
import RingkasanSaldo from './RingkasanSaldo';

function App() {
  // State utama: baca dari localStorage dulu, kalau kosong mulai dari array kosong
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [];
  });

  // Simpan ke localStorage setiap kali daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Menambah transaksi: buat array baru, jangan mengubah array lama
  const tambahTransaksi = (data) => {
    const transaksiBaru = { id: Date.now(), ...data };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  // Menghapus transaksi: ambil semua kecuali yang id-nya sama
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  // Nilai turunan: dihitung dari state, tidak perlu state baru
  const pemasukan = daftarTransaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((total, t) => total + t.nominal, 0);

  const pengeluaran = daftarTransaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((total, t) => total + t.nominal, 0);

  const saldo = pemasukan - pengeluaran;

  return (
    <div className="wadah">
      <h1>Catatan Keuangan Mini</h1>

      <RingkasanSaldo pemasukan={pemasukan} pengeluaran={pengeluaran} saldo={saldo} />

      <div className="kotak">
        <h2>Tambah transaksi</h2>
        <FormTransaksi onTambah={tambahTransaksi} />
      </div>

      <div className="kotak">
        <h2>Daftar transaksi</h2>

        {/* Conditional rendering: pesan khusus jika belum ada transaksi */}
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi.</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi key={t.id} transaksi={t} onHapus={hapusTransaksi} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;