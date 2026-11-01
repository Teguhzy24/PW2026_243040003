import React from 'react';

function KartuProyek({ judul, deskripsi, teknologi, linkGithub, warna }) {
  return (
    <div
      style={{
        border: '1px solid #D0D7DE',
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#1B365D', fontSize: '18px' }}>
        {judul}
      </h3>

      <p style={{ margin: '0 0 14px 0', fontSize: '14px', color: '#555', lineHeight: 1.6, flex: 1 }}>
        {deskripsi}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {teknologi.map((tech) => (
          <span
            key={tech}
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              backgroundColor: warna.bg,
              color: warna.text,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={linkGithub}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '10px 16px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default KartuProyek;