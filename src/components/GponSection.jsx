const ponStandards = [
  { name: 'GPON', dl: '2,5 Gbps', ul: '1,25 Gbps', note: 'In uso oggi in Italia', active: true },
  { name: 'XG-PON', dl: '10 Gbps', ul: '2,5 Gbps', note: 'Standard successivo', active: false },
  { name: 'XGS-PON', dl: '10 Gbps', ul: '10 Gbps', note: 'Simmetrico', active: false },
  { name: 'NG-PON2', dl: '40 Gbps', ul: '2,5 Gbps', note: 'Futuro', active: false },
]

const specs = [
  { label: 'Standard ITU-T', value: 'G.984' },
  { label: 'Velocità download (condivisa)', value: '2,5 Gbps' },
  { label: 'Velocità upload (condivisa)', value: '1,25 Gbps' },
  { label: 'Velocità tipica utente (download)', value: '1 Gbps' },
  { label: 'Distanza massima OLT–ONT', value: '20 km' },
  { label: 'Utenti per albero ottico', value: 'max 64–128' },
  { label: 'Mezzo trasmissivo', value: 'Fibra monomodale G.652' },
  { label: 'λ downstream (OLT→ONT)', value: '1490 nm' },
  { label: 'λ upstream (ONT→OLT)', value: '1310 nm' },
  { label: 'Connettore standard', value: 'SC/APC (verde)' },
]

export default function GponSection() {
  return (
    <section className="section section-dark" id="gpon">
      <div className="container">
        <div className="section-label">Tecnologia</div>
        <h2 className="section-title">La tecnologia <span>GPON</span></h2>
        <p className="section-body">
          GPON — Gigabit-capable Passive Optical Network — è lo standard su cui è costruita la rete FiberCop.
          "Passiva" significa che tra la centrale e casa tua non c'è nessun componente alimentato.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {/* Left: explanation */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 16, color: 'var(--accent)' }}>Come funziona lo splitter ottico?</h3>
            <p style={{ color: 'var(--muted)', fontSize: '.93rem', lineHeight: 1.75, marginBottom: 16 }}>
              Uno splitter ottico riceve una singola fibra in ingresso e produce N segnali su N fibre in uscita.
              Non ha parti in movimento, non richiede alimentazione: è fisicamente un prisma di vetro.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '.93rem', lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: 'var(--text)' }}>Downstream (OLT→ONT):</strong> lo splitter "copia" il segnale luminoso su tutte le fibre in uscita.
              Ogni ONT riceve tutto il traffico, ma scarta quello non suo (crittografato AES-128).
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '.93rem', lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: 'var(--text)' }}>Upstream (ONT→OLT):</strong> ogni ONT trasmette nel proprio slot temporale (TDMA),
              coordinato dall'OLT, così i segnali non si sovrappongono.
            </p>
            <div className="info-box" style={{ marginTop: 20 }}>
              In FiberCop lo splitting è <strong>tutto nel CRO</strong>: splitter primario 1:4 e secondario 1:16 nello stesso armadio.
              Nel ROE all'edificio non c'è nessun splitter — solo un raccordo fisico.
            </div>
          </div>

          {/* Right: specs table */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 16, color: 'var(--accent)' }}>Specifiche tecniche GPON</h3>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
              {specs.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '11px 18px',
                  borderBottom: i < specs.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                }}>
                  <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{s.label}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '.88rem' }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PON evolution */}
        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 20 }}>Evoluzione degli standard PON</h3>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {ponStandards.map((p, i) => (
              <div key={i} style={{
                flex: '1 1 180px', background: p.active ? 'rgba(0,200,255,.08)' : 'var(--surface)',
                border: `1px solid ${p.active ? 'rgba(0,200,255,.4)' : 'var(--border)'}`,
                borderRadius: 16, padding: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: p.active ? 'var(--accent)' : 'var(--text)' }}>{p.name}</span>
                  {p.active && <span className="chip chip-green" style={{ fontSize: '.65rem' }}>In uso ora</span>}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: '.68rem', color: 'var(--muted)', marginBottom: 2 }}>↓ Download</div>
                    <div style={{ fontWeight: 700, fontSize: '.95rem', color: p.active ? 'var(--accent)' : 'var(--text)' }}>{p.dl}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '.68rem', color: 'var(--muted)', marginBottom: 2 }}>↑ Upload</div>
                    <div style={{ fontWeight: 700, fontSize: '.95rem', color: p.active ? 'var(--accent3)' : 'var(--text)' }}>{p.ul}</div>
                  </div>
                </div>
                <div style={{ marginTop: 8, fontSize: '.78rem', color: 'var(--muted)' }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wholesale modes */}
        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>Come accedono gli operatori alla rete FiberCop</h3>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 24 }}>
            Tre modalità per ottenere servizi passivi da FiberCop:
          </p>
          <div className="card-grid card-grid-3">
            {[
              {
                title: 'VULA / Bitstream NGA',
                sub: 'Tramite TIM',
                body: 'L\'operatore non tocca la rete di accesso: acquista il servizio da TIM che fornisce anche OLT e ONT. È la soluzione più semplice per un nuovo operatore.',
                chip: 'Minimo investimento',
                chipType: 'chip-green',
              },
              {
                title: 'Full-GPON',
                sub: 'Rete completa tranne OLT',
                body: 'FiberCop fornisce tutto (splitter, ROE, drop, ONT). L\'operatore installa solo il proprio OLT nella centrale di riferimento. È il servizio più flessibile.',
                chip: 'Massima flessibilità',
                chipType: 'chip-blue',
              },
              {
                title: 'Semi-GPON',
                sub: 'Solo rete secondaria',
                body: 'FiberCop fornisce la parte di rete dall\'armadio CRO all\'abitazione. L\'operatore costruisce o acquisisce autonomamente la rete primaria (centrale→CRO).',
                chip: 'Accesso più granulare',
                chipType: 'chip-blue',
              },
            ].map((m, i) => (
              <div className="card" key={i}>
                <h3 style={{ color: 'var(--accent)', marginBottom: 4 }}>{m.title}</h3>
                <div style={{ color: 'var(--muted)', fontSize: '.78rem', marginBottom: 12 }}>{m.sub}</div>
                <p>{m.body}</p>
                <span className={`chip ${m.chipType}`} style={{ marginTop: 16, display: 'inline-flex' }}>{m.chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
