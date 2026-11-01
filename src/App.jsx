import React from 'react';
import KartuProyek from './KartuProyek';

function App() {
  const daftarProyek = [
    {
      id: 1,
      judul: 'Web Dealer Mobil Honda',
      deskripsi: 'Website dealer mobil yang menampilkan katalog mobil, spesifikasi, dan informasi dealer.',
      teknologi: ['PHP', 'HTML', 'CSS'],
      linkGithub: 'https://github.com/Teguhzy24/pw2025_tubes_243040003',
      warna: { bg: '#F8D7DA', text: '#721C24' },
    },
    {
      id: 2,
      judul: 'Web Portofolio',
      deskripsi: 'Website portofolio pribadi yang memperkenalkan profil, keahlian, dan karya yang pernah dibuat.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      linkGithub: 'https://github.com/Teguhzy24/itw2024_project1_243040003',
      warna: { bg: '#DBEAFE', text: '#1E40AF' },
    },
    {
      id: 3,
      judul: 'Web Company',
      deskripsi: 'Website company profile yang menyajikan informasi perusahaan, layanan, dan kontak.',
      teknologi: ['HTML', 'CSS'],
      linkGithub: 'https://github.com/Teguhzy24/itw2024_project2_243040003',
      warna: { bg: '#D4EDDA', text: '#155724' },
    },
    {
      id: 4,
      judul: 'Web Toko Gadget NEXORA',
      deskripsi: 'Website toko gadget NEXORA untuk menampilkan produk gadget beserta harga dan detailnya.',
      teknologi: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      linkGithub: 'https://github.com/Teguhzy24/Nexora-',
      warna: { bg: '#FFF3CD', text: '#856404' },
    },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 24px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#1B365D', margin: '0 0 8px 0' }}>Showcase Portofolio Mini</h1>
        <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>
          Kumpulan proyek yang pernah saya kerjakan
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {daftarProyek.map((proyek) => (
          <KartuProyek
            key={proyek.id}
            judul={proyek.judul}
            deskripsi={proyek.deskripsi}
            teknologi={proyek.teknologi}
            linkGithub={proyek.linkGithub}
            warna={proyek.warna}
          />
        ))}
      </section>
    </div>
  );
}

export default App;