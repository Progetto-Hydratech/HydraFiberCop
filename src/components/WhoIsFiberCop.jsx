export default function WhoIsFiberCop() {
  return (
    <section className="section" id="chi-e">
      <div className="container">
        <div className="section-label">Identità</div>
        <h2 className="section-title">Cos'è <span>FiberCop</span>?</h2>
        <p className="section-body">
          FiberCop è la società che possiede e gestisce la rete di accesso in fibra ottica in Italia.
          Controllata dal fondo KKR tramite Optics BidCo, opera esclusivamente come
          operatore <em>wholesale</em> — non vende servizi direttamente agli utenti finali.
        </p>

        <div className="card-grid card-grid-3">
          {cards.map((c, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <div className="info-box">
            <strong>Importante:</strong> FiberCop non vende connessioni internet direttamente ai clienti.
            Per attivare la FTTH su rete FiberCop devi rivolgerti a TIM, WindTre, Fastweb, Vodafone
            o uno degli altri operatori partner, che affittano l'infrastruttura passiva all'ingrosso.
          </div>
        </div>

        {/* shareholder structure */}
        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 24, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '.75rem' }}>Struttura societaria attuale</h3>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { name: 'KKR (via Optics BidCo)', pct: '100%', color: '#0055ff', desc: 'Controllo totale dal 1° luglio 2024' },
              { name: 'TIM', pct: '0%', color: 'var(--muted)', desc: 'Ceduta la quota con il closing NetCo' },
              { name: 'Fastweb', pct: '0%', color: 'var(--muted)', desc: 'Venduta la quota in precedenza' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: '1 1 220px', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '20px 24px',
                borderTop: `3px solid ${s.color}`,
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: s.color, letterSpacing: '-1px' }}>{s.pct}</div>
                <div style={{ fontWeight: 600, marginTop: 4, fontSize: '.95rem' }}>{s.name}</div>
                <div style={{ color: 'var(--muted)', fontSize: '.82rem', marginTop: 4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const cards = [
  {
    icon: '🏗️',
    title: 'Infrastruttura passiva',
    body: 'FiberCop possiede la rete fisica: cavi sotterranei, armadi stradali ottici (CRO/ARLO), scatole negli edifici (PTE/ROE) e splitter ottici. Nessun apparato attivo tra centrale e casa tua.',
  },
  {
    icon: '🔄',
    title: 'Operatore wholesale',
    body: 'Gli operatori retail (TIM, WindTre, Fastweb, Vodafone…) affittano l\'accesso alla rete FiberCop in tre modalità: VULA/Bitstream tramite TIM, Full-GPON o Semi-GPON con OLT proprio.',
  },
  {
    icon: '📋',
    title: 'Regolata da AGCOM',
    body: 'In quanto operatore con significativo potere di mercato, FiberCop è soggetta a obblighi regolatori: accesso garantito a parità di condizioni per tutti gli operatori, trasparenza e non discriminazione.',
  },
  {
    icon: '🗺️',
    title: '2578 comuni',
    body: 'Il piano di copertura punta a realizzare reti FTTH in 2578 comuni italiani entro metà 2026, coprendo circa il 75-80% delle unità immobiliari tecniche in aree nere e grigie.',
  },
  {
    icon: '⚡',
    title: 'Solo rete secondaria',
    body: 'FiberCop realizza esclusivamente la rete tra l\'armadio stradale e le abitazioni. La rete primaria (centrale → armadio) era già esistente grazie alla copertura FTTC di TIM.',
  },
  {
    icon: '🏆',
    title: 'Piano Italia 1 Giga',
    body: 'FiberCop si è aggiudicata 7 lotti del piano PNRR "Italia 1 Giga" per la copertura delle aree grigie e nere con fondi pubblici, espandendo il piano originale.',
  },
]
