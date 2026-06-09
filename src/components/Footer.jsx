export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ display: 'flex', gap: 3 }}>
                {['#0055ff','#00c8ff','#00e5a0'].map((c,i) => (
                  <span key={i} style={{ width: 7, height: 7, borderRadius: 2, background: c, display: 'block' }} />
                ))}
              </span>
              <span style={{ fontWeight: 800, fontSize: '.95rem' }}>
                FiberCop<span style={{ color: 'var(--accent)' }}>Wiki</span>
              </span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', maxWidth: 360, lineHeight: 1.6 }}>
              Guida divulgativa alla rete FTTH FiberCop in Italia.
              I contenuti tecnici si basano su documentazione pubblica, wiki FibraClick (CC BY 4.0) e offerte wholesale pubblicate da TIM/FiberCop.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>Sezioni</div>
              {['#chi-e', '#scorporo', '#architettura', '#gpon', '#copertura', '#foto'].map((href, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <a href={href} style={{ color: 'var(--muted)', fontSize: '.88rem', textDecoration: 'none', transition: 'color .15s' }}
                    onMouseEnter={e => e.target.style.color='var(--text)'}
                    onMouseLeave={e => e.target.style.color='var(--muted)'}
                  >{href.replace('#', '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}</a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12 }}>Fonti</div>
              {[
                { label: 'FiberCop.it', url: 'https://www.fibercop.it' },
                { label: 'FibraClick Wiki', url: 'https://fibra.click/fibercop/' },
                { label: 'FibraClick GPON', url: 'https://fibra.click/gpon/' },
                { label: 'Piano copertura PDF', url: 'https://wdc.wholesale.telecomitalia.it/wp-content/uploads/2021/06/Allegato1bs_PianoCoperturaOffertaCoinvestimento-22giu21.pdf' },
                { label: 'GitHub repo', url: 'https://github.com/Progetto-Hydratech/HydraFiberCop' },
              ].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <a href={l.url} target="_blank" rel="noopener" style={{ color: 'var(--muted)', fontSize: '.88rem', textDecoration: 'none', transition: 'color .15s' }}
                    onMouseEnter={e => e.target.style.color='var(--accent)'}
                    onMouseLeave={e => e.target.style.color='var(--muted)'}
                  >{l.label} ↗</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>
            Progetto <strong style={{ color: 'var(--text)' }}>HydraFiberCop</strong> — Contenuto a scopo divulgativo, non affiliato a FiberCop S.p.A.
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>
            Dati tecnici FibraClick Wiki: licenza CC BY 4.0
          </span>
        </div>
      </div>
    </footer>
  )
}
