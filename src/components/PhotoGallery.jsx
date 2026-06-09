import { useState } from 'react'

const photos = [
  {
    src: '/photos/fibercop-cro1.jpg',
    caption: 'Armadio FiberCop (a sinistra), colonnina alimentazione FTTC (al centro) e ARL TIM (a destra). Il CRO è il più grande, grigio con coperchio rosso.',
    tag: 'CRO / Armadio',
  },
  {
    src: '/photos/fibercop-cro4.jpg',
    caption: 'Un CRO "solitario" in zona ad alta densità abitativa di Savona. Non sempre viene installato accanto all\'ARL esistente.',
    tag: 'CRO / Armadio',
  },
  {
    src: '/photos/fibercop-cro6.jpg',
    caption: 'Un CRO di dimensione ridotta a Chieri (TO). Il modello più piccolo serve fino a 128 unità immobiliari anziché 384.',
    tag: 'CRO / Armadio',
  },
  {
    src: '/photos/fibercop-cro5.jpg',
    caption: 'Due CRO affiancati a Chiavari (GE). Quando le unità immobiliari superano 384, si installano più armadi ottici.',
    tag: 'CRO / Armadio',
  },
  {
    src: '/photos/fibercop-cro2.jpg',
    caption: 'Interno di un CRO aperto. In alto: 384 connettori per la rete secondaria punto-punto. Al centro: spazio per 14 splitter primari 1:4. In basso: spazio per 24 splitter secondari 1:16.',
    tag: 'Interno CRO',
  },
  {
    src: '/photos/fibercop-cro3.jpg',
    caption: 'Dettaglio degli splitter: in alto lo splitter primario 1:4 (4 connettori) e in basso lo splitter secondario 1:16 (16 connettori). Entrambi completamente passivi.',
    tag: 'Interno CRO',
  },
  {
    src: '/photos/fibercop-roe1.jpg',
    caption: 'PTE FiberCop (Punto di Terminazione d\'Edificio) montato su un palo della rete TIM. Riconoscibile dai loghi TIM e FiberCop. È solo un raccordo, senza splitter.',
    tag: 'PTE / ROE',
  },
  {
    src: '/photos/fibercop-pozzetto.jpg',
    caption: 'Chiusino di un pozzetto con il logo FiberCop. Sotto ci passano i cavi in fibra ottica che collegano la centrale ai CRO stradali.',
    tag: 'Infrastruttura',
  },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null)
  const [filter, setFilter] = useState('Tutti')
  const tags = ['Tutti', 'CRO / Armadio', 'Interno CRO', 'PTE / ROE', 'Infrastruttura']

  const filtered = filter === 'Tutti' ? photos : photos.filter(p => p.tag === filter)

  return (
    <section className="section section-dark" id="foto">
      <div className="container-wide">
        <div className="section-label">Foto sul campo</div>
        <h2 className="section-title">Com'è fatta <span>sul campo</span></h2>
        <p className="section-body">
          Riconoscerla è facile: cerca un armadio grigio con coperchio rosso accanto
          a quello verde/beige di TIM. Le foto mostrano tutti gli elementi dell'infrastruttura reale.
        </p>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {tags.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: '7px 18px', borderRadius: 50,
              background: filter === t ? 'var(--accent)' : 'var(--surface)',
              border: `1px solid ${filter === t ? 'var(--accent)' : 'var(--border)'}`,
              color: filter === t ? '#000' : 'var(--muted)',
              fontWeight: 600, fontSize: '.82rem', cursor: 'pointer', transition: 'all .15s',
            }}>{t}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {filtered.map((p, i) => (
            <button key={i} onClick={() => setLightbox(photos.indexOf(p))} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              borderRadius: 16, overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              border: '1px solid var(--border)',
              transition: 'transform .2s, border-color .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='scale(1.02)'; e.currentTarget.style.borderColor='var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='var(--border)'; }}
            >
              <div style={{ position: 'relative', paddingBottom: '66%', overflow: 'hidden', background: 'var(--surface)' }}>
                <img src={p.src} alt={p.caption} loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute', top: 10, left: 10,
                  background: 'rgba(0,0,0,.65)', backdropFilter: 'blur(8px)',
                  padding: '3px 10px', borderRadius: 50, fontSize: '.68rem', fontWeight: 600, color: 'var(--accent)',
                }}>{p.tag}</span>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--surface)', textAlign: 'left' }}>
                <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{p.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,.9)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24, cursor: 'zoom-out',
            }}
          >
            <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%', cursor: 'default' }}>
              <img src={photos[lightbox].src} alt="" style={{ width: '100%', borderRadius: 16, maxHeight: '70vh', objectFit: 'contain' }} />
              <p style={{ marginTop: 16, color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.6, textAlign: 'center' }}>
                {photos[lightbox].caption}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 20 }}>
                <button onClick={() => setLightbox(l => (l - 1 + photos.length) % photos.length)}
                  style={{ padding: '10px 24px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}>← Prev</button>
                <button onClick={() => setLightbox(null)}
                  style={{ padding: '10px 24px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)', cursor: 'pointer' }}>Chiudi</button>
                <button onClick={() => setLightbox(l => (l + 1) % photos.length)}
                  style={{ padding: '10px 24px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}>Next →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
