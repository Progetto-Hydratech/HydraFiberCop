import { useState } from 'react'

const OPERATORS = [
  {
    id: 'fibercop',
    name: 'FiberCop',
    subtitle: 'ex TIM · KKR',
    color: '#0085FF',
    bg: 'rgba(0,133,255,0.08)',
    border: 'rgba(0,133,255,0.3)',
  },
  {
    id: 'openfiber',
    name: 'Open Fiber',
    subtitle: 'ENEL + CDP · Macquarie',
    color: '#00c853',
    bg: 'rgba(0,200,83,0.08)',
    border: 'rgba(0,200,83,0.3)',
  },
  {
    id: 'fastweb',
    name: 'Fastweb',
    subtitle: 'Swisscom',
    color: '#ff3b30',
    bg: 'rgba(255,59,48,0.08)',
    border: 'rgba(255,59,48,0.3)',
  },
]

function FiberCopDetail() {
  const [activeNode, setActiveNode] = useState(null)

  const nodes = [
    {
      id: 'olt', label: 'Centrale', sublabel: 'OLT', icon: '🏭', color: '#0085FF',
      title: 'OLT — Optical Line Terminal',
      desc: 'La centrale telefonica ospita l\'OLT (Optical Line Terminal), il cuore attivo della rete GPON. Da qui partono le fibre ottiche verso i cabinet stradali. FiberCop usa OLT di Nokia e Huawei.',
      details: ['Ogni porta OLT gestisce fino a 64 utenti (1:64 splitting totale)', 'Velocità per porta: 2,5 Gbps down / 1,25 Gbps up condivisi', 'Raggio massimo: 20 km di fibra ottica', 'La centrale è di proprietà TIM ma la rete secondaria è di FiberCop'],
    },
    {
      id: 'cro', label: 'Armadio', sublabel: 'CRO / ARLO', icon: '🗄️', color: '#f5b42b',
      title: 'CRO — Cabinet Ripartilinea Ottico',
      desc: 'Il CRO (o ARLO) è l\'armadio stradale grigio che vedi sui marciapiedi. È il cuore della rete FiberCop: contiene sia lo splitter primario 1:4 che quello secondario 1:16, per un totale di 1:64.',
      details: ['Splitter primario 1:4 (da OLT a CRO)', 'Splitter secondario 1:16 (da CRO a edifici)', 'Completamente passivo — nessuna alimentazione elettrica', 'Riconoscibile dal logo FiberCop sull\'anta', 'Copre solitamente un raggio di 200-500 metri'],
    },
    {
      id: 'pte', label: 'Edificio', sublabel: 'PTE / ROE', icon: '🏢', color: '#f5b42b',
      title: 'PTE — Punto di Terminazione Edificio',
      desc: 'Il PTE (o ROE) è la scatola in cantina o sulla facciata. Nella rete FiberCop è solo un raccordo: non contiene splitter, a differenza di Open Fiber dove il ROE ha uno splitter 1:8 al suo interno.',
      details: ['Solo raccordo ottico — nessuno splitter', 'Riconoscibile dai loghi TIM e FiberCop', 'Facilita il cambio operatore senza intervento fisico', 'Da qui partono le drop verso ogni appartamento'],
    },
    {
      id: 'ont', label: 'Casa', sublabel: 'ONT', icon: '🏠', color: '#0085FF',
      title: 'ONT — Optical Network Terminal',
      desc: 'L\'ONT è il modem ottico installato in casa dall\'operatore. Converte il segnale ottico in segnale elettrico per il router. Fornito da TIM, Fastweb, Vodafone ecc. a seconda del contratto.',
      details: ['Velocità: fino a 1 Gbps in download, 300 Mbps in upload (VULA)', 'Alimentazione elettrica necessaria solo qui', 'Installato dall\'operatore retail al momento dell\'attivazione', 'Compatibile con tutti gli operatori che usano la rete FiberCop'],
    },
  ]

  const active = activeNode ? nodes.find(n => n.id === activeNode) : null

  return (
    <div>
      {/* Architettura interattiva */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>Architettura di rete</h3>
      <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginBottom: 24 }}>Clicca su un nodo per i dettagli.</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', marginBottom: 32, background: 'var(--surface)', borderRadius: 16, padding: '24px 20px', border: '1px solid var(--border)', overflowX: 'auto' }}>
        {nodes.map((node, i) => (
          <div key={node.id} style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            <div onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '14px 20px', borderRadius: 12, cursor: 'pointer',
                border: `2px solid ${activeNode === node.id ? node.color : 'var(--border)'}`,
                background: activeNode === node.id ? `${node.color}18` : 'var(--bg)',
                transition: 'all .2s', minWidth: 90,
              }}>
              <span style={{ fontSize: '1.6rem' }}>{node.icon}</span>
              <span style={{ fontWeight: 700, fontSize: '.8rem', color: node.color }}>{node.sublabel}</span>
              <span style={{ fontSize: '.7rem', color: 'var(--muted)' }}>{node.label}</span>
            </div>
            {i < nodes.length - 1 && (
              <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, var(--accent2), var(--accent))', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {active && (
        <div style={{ background: `${active.color}0f`, border: `1px solid ${active.color}40`, borderRadius: 12, padding: '20px 24px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, color: active.color, marginBottom: 8 }}>{active.title}</div>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.6, marginBottom: 12 }}>{active.desc}</p>
          <ul style={{ paddingLeft: 18 }}>
            {active.details.map((d, i) => (
              <li key={i} style={{ color: 'var(--muted)', fontSize: '.85rem', marginBottom: 4 }}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Specs GPON */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '32px 0 16px', color: 'var(--text)' }}>Specifiche GPON</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { label: 'Download', value: '2,5 Gbps', sub: 'condiviso 1:64' },
          { label: 'Upload', value: '1,25 Gbps', sub: 'condiviso 1:64' },
          { label: 'Download utente', value: '1 Gbps', sub: 'VULA max' },
          { label: 'Upload utente', value: '300 Mbps', sub: 'VULA max' },
          { label: 'Splitting', value: '1:64', sub: '1:4 × 1:16' },
          { label: 'Lunghezza onda', value: '1490/1310 nm', sub: 'down/up' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent3)' }}>{s.value}</div>
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Copertura */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0 16px', color: 'var(--text)' }}>Copertura</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 16 }}>
        {[
          { n: '2.578', l: 'comuni nel piano' },
          { n: '13,6M', l: 'UIT da coprire' },
          { n: '~80%', l: 'aree nere/grigie' },
          { n: '7', l: 'lotti PNRR vinti' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent3)' }}>{s.n}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div className="info-box" style={{ borderRadius: 10, padding: '14px 18px', fontSize: '.85rem' }}>
        <strong>Verifica copertura:</strong>{' '}
        <a href="https://www.fibercop.it" target="_blank" rel="noopener">fibercop.it</a> oppure{' '}
        <a href="https://fibra.click" target="_blank" rel="noopener">fibra.click</a> per controllo indirizzo.
      </div>
    </div>
  )
}

function OpenFiberDetail() {
  return (
    <div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Architettura di rete</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
        <div className="info-box" style={{ borderRadius: 12, padding: '20px 24px' }}>
          <strong style={{ color: '#00c853' }}>Differenza chiave col ROE</strong>
          <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>
            Nella rete Open Fiber il <strong style={{ color: 'var(--text)' }}>ROE contiene uno splitter 1:8</strong>, a differenza di FiberCop dove il ROE è solo un raccordo. Lo splitter primario è invece in centrale o in un armadio stradale (PFP).
          </p>
        </div>
        <div className="info-box" style={{ borderRadius: 12, padding: '20px 24px' }}>
          <strong style={{ color: '#00c853' }}>XGS-PON nelle nuove tratte</strong>
          <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>
            Sulle tratte PNRR più recenti Open Fiber sta deployando <strong style={{ color: 'var(--text)' }}>XGS-PON</strong>: simmetrico 10 Gbps per porta, già pronto per servizi 2,5 Gbps agli utenti finali.
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Specifiche tecniche</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { label: 'Tecnologia', value: 'GPON + XGS-PON', sub: 'nuove tratte XGS' },
          { label: 'Download max', value: '1 Gbps', sub: '(2,5 Gbps XGS)' },
          { label: 'Upload max', value: '200 Mbps', sub: '(1,25 Gbps XGS)' },
          { label: 'Splitting', value: '1:64', sub: 'ROE 1:8 + OLT' },
          { label: 'Posizione splitter', value: 'ROE edificio', sub: 'splitter 1:8 dentro' },
          { label: 'Modello', value: 'Wholesale puro', sub: 'no retail proprio' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#00c853' }}>{s.value}</div>
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Copertura e finanziamento</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 16 }}>
        {[
          { n: '~7.500', l: 'comuni obiettivo' },
          { n: '>6M', l: 'UIT già connesse' },
          { n: 'BUL + PNRR', l: 'fondi pubblici' },
          { n: 'Aree bianche', l: 'focus principale' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00c853' }}>{s.n}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div className="info-box" style={{ borderRadius: 10, padding: '14px 18px', fontSize: '.85rem' }}>
        <strong>Verifica copertura:</strong>{' '}
        <a href="https://openfiber.it/copertura" target="_blank" rel="noopener">openfiber.it/copertura</a>
      </div>
    </div>
  )
}

function FastwebDetail() {
  return (
    <div>
      <div className="info-box" style={{ borderRadius: 12, padding: '18px 22px', marginBottom: 28, borderColor: 'rgba(255,59,48,.2)', background: 'rgba(255,59,48,.05)' }}>
        <strong style={{ color: '#ff3b30' }}>Rete proprietaria — non wholesale</strong>
        <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6 }}>
          Fastweb ha costruito una propria rete FTTH nelle ~30 principali città italiane.
          A differenza di FiberCop e Open Fiber, <strong style={{ color: 'var(--text)' }}>non la affitta ad altri operatori</strong>:
          è utilizzabile solo con contratti Fastweb retail.
          Recente accordo con TIM per accesso reciproco a FiberCop/rete Fastweb.
        </p>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Specifiche tecniche</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 32 }}>
        {[
          { label: 'Tecnologia', value: 'GPON / XGS-PON', sub: 'XGS nelle città principali' },
          { label: 'Download max', value: '2,5 Gbps', sub: 'su XGS-PON' },
          { label: 'Upload max', value: '1,25 Gbps', sub: 'su XGS-PON' },
          { label: 'Splitting', value: '1:32 – 1:64', sub: 'variabile per area' },
          { label: 'Copertura', value: '~30 città', sub: '~4,5M UIT' },
          { label: 'Modello', value: 'Verticale', sub: 'rete + retail propri' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ff3b30' }}>{s.value}</div>
            <div style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Città coperte (principali)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {['Milano', 'Roma', 'Napoli', 'Torino', 'Bologna', 'Firenze', 'Genova', 'Bari', 'Palermo', 'Catania', 'Venezia', 'Verona', 'Padova', 'Trieste', 'Brescia'].map(c => (
          <span key={c} className="chip" style={{ color: '#ff3b30', borderColor: 'rgba(255,59,48,.3)', background: 'rgba(255,59,48,.06)' }}>{c}</span>
        ))}
      </div>

      <div className="info-box" style={{ borderRadius: 10, padding: '14px 18px', fontSize: '.85rem' }}>
        <strong>Verifica copertura:</strong>{' '}
        <a href="https://www.fastweb.it/adsl-fibra-ottica/verifica-copertura/" target="_blank" rel="noopener">fastweb.it — verifica copertura</a>
      </div>
    </div>
  )
}

export default function OperatorTabs() {
  const [active, setActive] = useState('fibercop')
  const op = OPERATORS.find(o => o.id === active)

  return (
    <section id="operatori" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label">Dettagli per operatore</div>
          <h2 className="section-title">
            Scegli un <span>operatore</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Seleziona la rete per vedere architettura, specifiche tecniche e copertura nel dettaglio.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
          {OPERATORS.map(o => (
            <button key={o.id} onClick={() => setActive(o.id)} style={{
              padding: '12px 28px', borderRadius: 10, border: `2px solid ${active === o.id ? o.color : 'var(--border)'}`,
              background: active === o.id ? o.bg : 'transparent',
              color: active === o.id ? o.color : 'var(--muted)',
              fontWeight: 700, fontSize: '.95rem', cursor: 'pointer',
              transition: 'all .2s',
            }}>
              {o.name}
              <span style={{ display: 'block', fontSize: '.7rem', fontWeight: 400, opacity: .7, marginTop: 2 }}>{o.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{
          background: 'var(--surface)', border: `1px solid ${op.border}`,
          borderRadius: 20, padding: '36px 32px',
        }}>
          {active === 'fibercop' && <FiberCopDetail />}
          {active === 'openfiber' && <OpenFiberDetail />}
          {active === 'fastweb' && <FastwebDetail />}
        </div>
      </div>
    </section>
  )
}
