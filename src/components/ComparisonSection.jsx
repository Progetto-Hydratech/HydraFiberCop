export default function ComparisonSection() {
  const operators = [
    {
      name: 'FiberCop',
      logo: '🔵',
      subtitle: 'ex TIM / KKR',
      color: '#0085FF',
      bg: 'rgba(0,133,255,0.07)',
      border: 'rgba(0,133,255,0.25)',
      tech: 'GPON',
      splitting: '1:4 + 1:16 (1:64 totale)',
      splitterPos: 'CRO/ARLO (strada)',
      downSpeed: '1 Gbps',
      upSpeed: '300 Mbps (VULA)',
      model: 'Wholesale puro',
      retail: 'No (solo B2B)',
      coverage: '2.578 comuni, ~13,6M UIT',
      areas: 'Aree nere/grigie (ex TIM)',
      pnrr: 'Limitato',
      operators: 'TIM, Vodafone, Fastweb, WindTre, Iliad…',
      note: 'Unico operatore wholesale in Italia con rete capillare nei comuni TIM. Il ROE non contiene splitter.',
    },
    {
      name: 'Open Fiber',
      logo: '🟢',
      subtitle: 'ENEL + CDP / Macquarie',
      color: '#00c853',
      bg: 'rgba(0,200,83,0.07)',
      border: 'rgba(0,200,83,0.25)',
      tech: 'GPON / XGS-PON (nuove tratte)',
      splitting: '1:8 al ROE + 1:8 in centrale (1:64)',
      splitterPos: 'ROE (edificio) + OLT',
      downSpeed: '1 Gbps (2,5 Gbps XGS-PON)',
      upSpeed: '200 Mbps – 1,25 Gbps',
      model: 'Wholesale puro',
      retail: 'No (solo B2B)',
      coverage: '~7.500 comuni (obiettivo)',
      areas: 'Aree bianche (BUL/PNRR) + alcune nere',
      pnrr: 'Principale beneficiario PNRR',
      operators: 'TIM, Vodafone, Fastweb, WindTre, Iliad…',
      note: 'Presenza forte nei comuni piccoli/rurali grazie ai fondi pubblici BUL. Il ROE contiene lo splitter 1:8.',
    },
    {
      name: 'Fastweb',
      logo: '🔴',
      subtitle: 'Swisscom',
      color: '#ff3b30',
      bg: 'rgba(255,59,48,0.07)',
      border: 'rgba(255,59,48,0.25)',
      tech: 'GPON / XGS-PON',
      splitting: '1:32 – 1:64',
      splitterPos: 'Variabile (armadio o edificio)',
      downSpeed: '1 Gbps – 2,5 Gbps',
      upSpeed: '300 Mbps – 1,25 Gbps',
      model: 'Verticalmente integrato',
      retail: 'Sì (vende direttamente)',
      coverage: '~30 città (Milano, Roma, Napoli…)',
      areas: 'Solo grandi centri urbani',
      pnrr: 'No',
      operators: 'Solo Fastweb retail',
      note: 'Rete proprietaria, non wholesale. Copre circa 4,5M UIT nelle grandi città. Recente accordo con TIM per accesso a FiberCop.',
    },
  ]

  const rows = [
    { key: 'tech', label: 'Tecnologia' },
    { key: 'splitting', label: 'Rapporto di splitting' },
    { key: 'splitterPos', label: 'Posizione splitter' },
    { key: 'downSpeed', label: 'Velocità download' },
    { key: 'upSpeed', label: 'Velocità upload' },
    { key: 'model', label: 'Modello di business' },
    { key: 'retail', label: 'Offerte retail proprie' },
    { key: 'coverage', label: 'Copertura' },
    { key: 'areas', label: 'Tipo di aree' },
    { key: 'pnrr', label: 'Fondi PNRR/BUL' },
    { key: 'operators', label: 'Operatori che la usano' },
  ]

  return (
    <section id="confronto" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Infrastrutture a confronto</div>
          <h2 className="section-title">
            FiberCop vs Open Fiber vs <span>Fastweb</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
            In Italia esistono tre reti FTTH principali. Capire quale rete
            porta la fibra a casa tua fa la differenza sulle velocità disponibili
            e sugli operatori che puoi scegliere.
          </p>
        </div>

        {/* Cards riassuntive */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
          {operators.map(op => (
            <div key={op.name} style={{
              background: op.bg,
              border: `1px solid ${op.border}`,
              borderRadius: 16,
              padding: '28px 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: '1.6rem' }}>{op.logo}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.15rem', color: op.color }}>{op.name}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{op.subtitle}</div>
                </div>
              </div>
              <p style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{op.note}</p>

              <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="chip chip-blue">{op.tech}</span>
                <span className="chip" style={{
                  color: op.retail === 'No (solo B2B)' ? 'var(--muted)' : '#f5b42b',
                  borderColor: op.retail === 'No (solo B2B)' ? 'var(--border)' : 'rgba(245,180,43,.3)',
                  background: 'transparent',
                }}>
                  {op.retail === 'No (solo B2B)' ? 'Solo wholesale' : 'Retail proprio'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabella comparativa */}
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.85rem' }}>
            <thead>
              <tr style={{ background: 'var(--surface)' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: 'var(--muted)', fontWeight: 600, borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>
                  Caratteristica
                </th>
                {operators.map(op => (
                  <th key={op.name} style={{
                    padding: '14px 20px', textAlign: 'left',
                    borderBottom: '1px solid var(--border)',
                    borderLeft: '1px solid var(--border)',
                    color: op.color, fontWeight: 700, whiteSpace: 'nowrap',
                  }}>
                    {op.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.key} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                  <td style={{ padding: '12px 20px', color: 'var(--muted)', fontWeight: 600, borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>
                    {row.label}
                  </td>
                  {operators.map(op => (
                    <td key={op.name} style={{
                      padding: '12px 20px', color: 'var(--text)',
                      borderBottom: '1px solid var(--border)',
                      borderLeft: '1px solid var(--border)',
                      lineHeight: 1.5,
                    }}>
                      {op[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nota architetturale chiave */}
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          <div className="info-box" style={{ borderRadius: 12, padding: '20px 24px' }}>
            <strong>💡 Come riconoscere la rete</strong>
            <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>
              Guarda il ROE/PTE nel tuo palazzo: se ha il logo <strong style={{ color: 'var(--text)' }}>TIM + FiberCop</strong> è rete FiberCop (no splitter dentro).
              Se ha il logo <strong style={{ color: 'var(--text)' }}>Open Fiber</strong> contiene uno splitter 1:8.
              Se hai <strong style={{ color: 'var(--text)' }}>Fastweb</strong> come operatore in una grande città, probabilmente usi la loro rete proprietaria.
            </p>
          </div>
          <div className="info-box" style={{ borderRadius: 12, padding: '20px 24px' }}>
            <strong>⚡ Chi offre velocità maggiori?</strong>
            <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>
              FiberCop e Open Fiber sono oggi fermi a <strong style={{ color: 'var(--text)' }}>1 Gbps / 300 Mbps</strong> in upload (limite VULA).
              Open Fiber sta introducendo XGS-PON su nuove tratte (2,5 Gbps simmetrico).
              Fastweb offre già <strong style={{ color: 'var(--text)' }}>2,5 Gbps</strong> in alcune città sulla sua rete XGS-PON.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
