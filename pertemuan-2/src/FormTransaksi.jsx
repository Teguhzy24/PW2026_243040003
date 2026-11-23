import { useState } from "react";

function FormTransaksi({ onTambah }) {
  // State lokal untuk tiga input formulir
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan");

  // Nilai input selalu berupa teks, jadi diubah ke angka dulu
  const angka = Number(nominal);
  const nominalSalah = nominal !== "" && angka <= 0;
  const tidakValid = keterangan.trim() === "" || nominal === "" || angka <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;

    // "melapor" ke komponen induk lewat function props
    onTambah({
      keterangan: keterangan.trim(),
      nominal: angka,
      jenis: jenis,
    });

    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="isian">
        <label htmlFor="keterangan">Keterangan</label>
        <input
          id="keterangan"
          type="text"
          placeholder="Contoh: Uang saku"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>

      <div className="isian">
        <label htmlFor="nominal">Nominal (Rp)</label>
        <input
          id="nominal"
          type="text"
          inputMode="numeric"
          placeholder="0"
          value={nominal}
          onChange={(e) => setNominal(e.target.value.replace(/\D/g, ""))}
        />
        {nominalSalah && <p className="galat">Nominal harus lebih dari 0.</p>}
      </div>

      <div className="isian">
        <label htmlFor="jenis">Jenis</label>
        <select
          id="jenis"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button type="submit" disabled={tidakValid}>
        Simpan
      </button>
    </form>
  );
}

export default FormTransaksi;
