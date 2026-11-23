import formatRupiah from './formatRupiah';

function ItemTransaksi({ transaksi, onHapus }) {
  const pemasukan = transaksi.jenis === 'pemasukan';

  return (
    <li className="item">
      <div className="item-info">
        <div>{transaksi.keterangan}</div>
        <small>{pemasukan ? 'Pemasukan' : 'Pengeluaran'}</small>
      </div>

      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={pemasukan ? 'hijau' : 'merah'}>
        {pemasukan ? '+ ' : '- '}
        {formatRupiah(transaksi.nominal)}
      </span>

      <button className="hapus" onClick={() => onHapus(transaksi.id)}>
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;