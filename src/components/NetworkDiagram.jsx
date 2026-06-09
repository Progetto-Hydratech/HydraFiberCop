import { useState } from 'react'

const nodes = [
  {
    id: 'centrale',
    label: 'Centrale',
    sublabel: 'OLT',
    icon: '🏭',
    color: '#0055ff',
    title: 'Centrale Telefonica — OLT',
    desc: 'La centrale (o POP, Point of Presence) è il punto di origine della rete FTTH. Qui si trovano gli OLT (Optical Line Terminal), gli apparati attivi che gestiscono la comunicazione ottica verso tutti gli utenti.',
    details: [
      'Contiene gli OLT (Optical Line Terminal) dei vari operatori',
      'Ogni porta OLT gestisce un "albero ottico" con fino a 64 utenti',
      'Collegata alla rete backbone ad alta capacità (10+ Gbps)',
      'Distanza massima dall\'ONT: 20 km in fibra monomodale G.652',
      'In FiberCop, gli operatori installano i propri OLT in centrale (Full-GPON)',
    ],
  },
  {
    id: 'cro',
    label: 'Armadio CRO',
    sublabel: 'Splitter 1:4 × 1:16',
    icon: '📦',
    color: '#00c8ff',
    title: 'CRO / ARLO — Cabinet Ripartilinea Ottico',
    desc: 'Il CRO (Cabinet Ripartilinea Ottico), anche detto ARLO, è il cuore distintivo della rete FiberCop. Contiene entrambi i livelli di splitting in un unico armadio stradale grigio con coperchio rosso.',
    details: [
      'Contiene splitter primari 1:4 (fino a 14 cassetti)',
      'Contiene splitter secondari 1:16 (fino a 24 cassetti)',
      'Splitting totale 1:64 — condivide 2,5 Gbps tra 64 utenti',
      'Serve fino a 384 unità immobiliari con fibra punto-punto',
      'Posizionato accanto agli armadi TIM esistenti (ARL)',
      'Nessun componente alimentato: è completamente passivo',
      'Facilita il cambio operatore senza intervento al ROE',
    ],
  },
  {
    id: 'pte',
    label: 'Edificio',
    sublabel: 'PTE / ROE',
    icon: '🏢',
    color: '#f5b42b',
    title: 'PTE — Punto di Terminazione d\'Edificio',
    desc: 'Il PTE (Punto di Terminazione di Edificio), anche chiamato ROE (Ripartitore Ottico di Edificio), è la scatola installata in cantina o sulla facciata del palazzo. Nella rete FiberCop è solo un raccordo — non contiene splitter.',
    details: [
      'Installato nel locale contatori, sulla parete esterna o su un palo',
      'In FiberCop funge da semplice distributore (no splitter al suo interno)',
      'Nella rete Flash Fiber/Open Fiber il ROE contiene invece uno splitter 1:8',
      'Da qui partono le "drop" — fibre sottili verso ogni appartamento',
      'Riconoscibile dai loghi TIM e FiberCop sulla scatola',
      'Una volta installato, serve tutti gli appartamenti del palazzo',
    ],
  },
  {
    id: 'ont',
    label: 'Casa',
    sublabel: 'ONT / Router',
    icon: '🏠',
    color: '#c080ff',
    title: 'ONT — Optical Network Terminal',
    desc: 'L\'ONT (o ONU, Optical Network Unit) è il modem ottico installato in casa. Converte il segnale luminoso della fibra in segnale elettrico Ethernet per il router. Viene fornito dall\'operatore e configurato con le sue credenziali.',
    details: [
      'Converte luce infrared → segnale Ethernet (o telefonia VoIP)',
      'Riconosce la propria "onda" nel flusso GPON grazie all\'OLT',
      'Tutto il traffico degli altri utenti viene ricevuto ma scartato (crittografato)',
      'Può essere un box separato o integrato nel router dell\'operatore',
      'Può essere un modulo SFP da inserire in un router compatibile',
      'Cambiando operatore: stesso cavo, stessa fibra, diversa configurazione',
    ],
  },
]

const links = [
  { from: 0, to: 1, label: 'Fibra feeder (rete primaria)', sub: 'già esistente da FTTC' },
  { from: 1, to: 2, label: 'Fibra distribuzione (rete secondaria)', sub: 'installata da FiberCop' },
  { from: 2, to: 3, label: 'Drop fiber', sub: 'fino all\'appartamento' },
]

export default function NetworkDiagram() {
  const [active, setActive] = useState(null)
  const node = active !== null ? nodes[active] : null

  return (
    <section className="section" id="architettura">
      <div className="container">
        <div className="section-label">Architettura</div>
        <h2 className="section-title">La struttura della <span>rete FTTH</span></h2>
        <p className="section-body">
          FiberCop utilizza la tecnologia GPON con splitting 1:64 in due livelli,
          entrambi concentrati nel CRO stradale. Clicca su ogni elemento per scoprire cosa fa.
        </p>

        {/* Diagram */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, flexWrap: 'nowrap', overflowX: 'auto', padding: '24px 0',
        }}>
          {nodes.map((n, i) => (
            <div key={n.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {/* Node */}
              <button
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 6,
                  width: 120, height: 120,
                  borderRadius: 20,
                  background: active === i
                    ? `linear-gradient(135deg, ${n.color}22, ${n.color}08)`
                    : 'var(--surface)',
                  border: `2px solid ${active === i ? n.color : 'var(--border)'}`,
                  cursor: 'pointer', padding: 12, textAlign: 'center',
                  transition: 'all .2s',
                  boxShadow: active === i ? `0 0 30px ${n.color}30` : 'none',
                }}
                onMouseEnter={e => {
                  if (active !== i) e.currentTarget.style.borderColor = n.color
                }}
                onMouseLeave={e => {
                  if (active !== i) e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>{n.icon}</span>
                <span style={{ fontSize: '.7rem', color: 'var(--muted)', lineHeight: 1.3 }}>{n.label}</span>
                <span style={{ fontSize: '.68rem', fontWeight: 700, color: n.color, lineHeight: 1 }}>{n.sublabel}</span>
              </button>

              {/* Connector */}
              {i < nodes.length - 1 && (
                <div style={{ width: 80, flexShrink: 0, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontSize: '.58rem', color: 'var(--muted)', textAlign: 'center', marginBottom: 4, whiteSpace: 'nowrap' }}>
                    {links[i].label}
                  </div>
                  <div style={{ position: 'relative', width: '100%', height: 4, display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--accent2), var(--accent))', borderRadius: 2 }} />
                    <div style={{
                      position: 'absolute', left: 0, width: 10, height: 10, borderRadius: '50%',
                      background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)',
                      animation: `travel${i} 2s linear infinite`,
                    }} />
                  </div>
                  <div style={{ fontSize: '.55rem', color: 'var(--muted)', opacity: .6, textAlign: 'center', marginTop: 4, whiteSpace: 'nowrap' }}>
                    {links[i].sub}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pulse animation */}
        <style>{`
          @keyframes travel0 { 0%{left:0;opacity:1} 85%{left:calc(100% - 10px);opacity:1} 100%{left:calc(100% - 10px);opacity:0} }
          @keyframes travel1 { 0%{left:0;opacity:1} 85%{left:calc(100% - 10px);opacity:1} 100%{left:calc(100% - 10px);opacity:0} }
          @keyframes travel2 { 0%{left:0;opacity:1} 85%{left:calc(100% - 10px);opacity:1} 100%{left:calc(100% - 10px);opacity:0} }
          .node-pulse-0 .line-dot { animation-delay: 0s; }
          .node-pulse-1 .line-dot { animation-delay: .67s; }
          .node-pulse-2 .line-dot { animation-delay: 1.33s; }
        `}</style>

        {/* Detail panel */}
        {node && (
          <div style={{
            marginTop: 32, background: 'var(--surface)', border: `1px solid ${node.color}50`,
            borderRadius: 20, padding: '32px',
            boxShadow: `0 0 50px ${node.color}15`,
            animation: 'fadeUp .2s ease',
          }}>
            <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }`}</style>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <span style={{ fontSize: '2.4rem' }}>{node.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: node.color }}>{node.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.92rem', marginTop: 6, lineHeight: 1.65 }}>{node.desc}</p>
              </div>
              <button onClick={() => setActive(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem', padding: '4px 8px', flexShrink: 0 }}>✕</button>
            </div>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 8 }}>
              {node.details.map((d, i) => (
                <li key={i} style={{
                  padding: '10px 14px', background: `${node.color}08`,
                  border: `1px solid ${node.color}20`, borderRadius: 10,
                  fontSize: '.87rem', display: 'flex', gap: 10, alignItems: 'flex-start',
                }}>
                  <span style={{ color: node.color, flexShrink: 0 }}>›</span>
                  <span style={{ color: 'var(--text)' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Comparison table */}
        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 20, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '.75rem' }}>
            FiberCop vs Flash Fiber vs Open Fiber — confronto architettura
          </h3>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.88rem' }}>
              <thead>
                <tr style={{ background: 'var(--surface2)' }}>
                  {['Caratteristica', 'FiberCop', 'Flash Fiber', 'Open Fiber'].map((h, i) => (
                    <th key={i} style={{ padding: '14px 18px', textAlign: i === 0 ? 'left' : 'center',
                      fontWeight: 600, color: i === 1 ? 'var(--accent)' : 'var(--muted)',
                      borderBottom: '1px solid var(--border)',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--surface)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{
                        padding: '12px 18px', borderBottom: '1px solid var(--border)',
                        textAlign: j === 0 ? 'left' : 'center', color: j === 0 ? 'var(--muted)' : 'var(--text)',
                        fontSize: j === 0 ? '.82rem' : '.88rem',
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

const tableRows = [
  ['Fattore di splitting totale', '1:64', '1:64', '1:64 (privato) / 1:16 (pubblico)'],
  ['Livelli di splitting', '2 (entrambi nel CRO)', '2 (CNO + ROE)', '2 (PFP + PFS)'],
  ['Splitter nel ROE/PTE', '❌ Solo raccordo', '✅ Splitter 1:8', '❌ Solo raccordo'],
  ['Rete primaria', 'Esistente (ex-FTTC TIM)', 'Esistente (TIM)', 'Nuova costruzione'],
  ['Cambio operatore', 'Solo intervento al CRO', 'Intervento al ROE necessario', 'Solo intervento al POP'],
  ['OLT in centrale', 'Operatore installa i propri', 'Solo TIM o Fastweb', 'Operatore installa i propri'],
  ['Max UIT per armadio', '384', '~64–128 per CNO', '~320 per PFP'],
]
