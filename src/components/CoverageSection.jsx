const topCities = [
  { rank: 1, city: 'Roma', uit: '1.244.745', year: 2023 },
  { rank: 2, city: 'Torino', uit: '451.322', year: 2021 },
  { rank: 3, city: 'Napoli', uit: '350.277', year: 2021 },
  { rank: 4, city: 'Genova', uit: '309.312', year: 2021 },
  { rank: 5, city: 'Palermo', uit: '236.455', year: 2021 },
  { rank: 6, city: 'Bologna', uit: '225.962', year: 2021 },
  { rank: 7, city: 'Firenze', uit: '205.026', year: 2023 },
  { rank: 8, city: 'Venezia', uit: '152.132', year: 2023 },
  { rank: 9, city: 'Bari', uit: '139.046', year: 2021 },
  { rank: 10, city: 'Catania', uit: '126.176', year: 2021 },
  { rank: 11, city: 'Verona', uit: '119.485', year: 2023 },
  { rank: 12, city: 'Trieste', uit: '119.017', year: 2023 },
  { rank: 13, city: 'Padova', uit: '102.278', year: 2023 },
  { rank: 14, city: 'Messina', uit: '98.820', year: 2021 },
  { rank: 15, city: 'Modena', uit: '94.087', year: 2021 },
  { rank: 16, city: 'Brescia', uit: '93.322', year: 2023 },
  { rank: 17, city: 'Parma', uit: '85.698', year: 2021 },
  { rank: 18, city: 'Prato', uit: '82.451', year: 2023 },
  { rank: 19, city: 'Taranto', uit: '78.914', year: 2021 },
  { rank: 20, city: 'Reggio Calabria', uit: '76.203', year: 2023 },
]

export default function CoverageSection() {
  return (
    <section className="section" id="copertura">
      <div className="container">
        <div className="section-label">Copertura</div>
        <h2 className="section-title">Il piano di <span>copertura</span></h2>
        <p className="section-body">
          2578 comuni italiani entro metà 2026, coprendo il 75–80% delle unità immobiliari
          tecniche in aree nere e grigie. La lista completa è pubblica.
        </p>

        {/* Key numbers */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { n: '2.578', l: 'comuni nel piano', color: 'var(--accent)' },
            { n: '13,6M', l: 'UIT da coprire', color: 'var(--accent3)' },
            { n: '~80%', l: 'delle aree nere/grigie', color: '#c080ff' },
            { n: '7', l: 'lotti PNRR vinti', color: 'var(--orange)' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: '1 1 160px', background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '20px 24px', borderLeft: `3px solid ${s.color}`,
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: s.color, letterSpacing: '-1px' }}>{s.n}</div>
              <div style={{ color: 'var(--muted)', fontSize: '.82rem', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* How to check */}
        <div className="info-box" style={{ marginBottom: 40 }}>
          <strong>Vuoi sapere se sei coperto?</strong> Verifica il tuo indirizzo su{' '}
          <a href="https://www.fibercop.it" target="_blank" rel="noopener">fibercop.it</a> oppure controlla
          i cantieri in corso su{' '}
          <a href="https://www.fibercop.it/cantieri-in-corso/" target="_blank" rel="noopener">fibercop.it/cantieri-in-corso</a>.
          Una volta coperto, verifica la disponibilità commerciale su{' '}
          <a href="https://fibermap.it" target="_blank" rel="noopener">fibermap.it</a>.
        </div>

        {/* Table */}
        <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 16 }}>Top 20 comuni per unità immobiliari</h3>
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
            <thead>
              <tr style={{ background: 'var(--surface2)' }}>
                {['#', 'Comune', 'UIT (Unità Imm. Tecniche)', 'Anno completamento'].map((h, i) => (
                  <th key={i} style={{
                    padding: '13px 18px', textAlign: i === 0 || i === 3 ? 'center' : 'left',
                    fontWeight: 600, color: 'var(--muted)', borderBottom: '1px solid var(--border)',
                    fontSize: '.8rem', letterSpacing: '.5px', textTransform: 'uppercase',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topCities.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.015)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,200,255,.04)'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.015)'}
                >
                  <td style={{ padding: '11px 18px', borderBottom: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted)', fontWeight: 600 }}>{row.rank}</td>
                  <td style={{ padding: '11px 18px', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>{row.city}</td>
                  <td style={{ padding: '11px 18px', borderBottom: '1px solid var(--border)', color: 'var(--accent)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{row.uit}</td>
                  <td style={{ padding: '11px 18px', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                    <span className={`chip ${row.year === 2021 ? 'chip-green' : 'chip-blue'}`}>{row.year}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 14, color: 'var(--muted)', fontSize: '.82rem' }}>
          La lista completa dei 2578 comuni è pubblicata da TIM/FiberCop nel{' '}
          <a href="https://wdc.wholesale.telecomitalia.it/wp-content/uploads/2021/06/Allegato1bs_PianoCoperturaOffertaCoinvestimento-22giu21.pdf" target="_blank" rel="noopener">
            Piano di Copertura (PDF)
          </a>.
          Fonte: Offerta di Co-investimento TIM, gennaio/giugno 2021.
        </p>
      </div>
    </section>
  )
}
