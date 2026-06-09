const events = [
  {
    year: '2010–2019',
    color: '#0055ff',
    title: 'Copertura FTTC di TIM',
    body: 'TIM realizza la rete primaria in fibra ottica (Fiber To The Cabinet) su scala nazionale, portando la fibra dalla centrale fino agli armadi ripartilinea stradali (ARL). Questa infrastruttura diventerà la base per FiberCop.',
    chip: null,
  },
  {
    year: 'Marzo 2021',
    color: '#00c8ff',
    title: 'Nasce FiberCop',
    body: 'TIM scinde la rete di accesso secondaria in FiberCop. KKR entra con il 37,5%, Fastweb con il 4,5%, TIM mantiene il 58%. L\'obiettivo: cablare 2578 comuni in FTTH entro il 2026, realizzando solo la rete tra armadio e abitazioni.',
    chip: { label: 'TIM 58% · KKR 37,5% · Fastweb 4,5%', type: 'chip-blue' },
  },
  {
    year: '2021–2023',
    color: '#00e5a0',
    title: 'Installazione massiva dei CRO',
    body: 'Appaiono per le strade italiane i caratteristici armadi grigi con coperchio rosso: i CRO (Cabinet Ripartilinea Ottico). Vengono installati accanto agli ARL TIM esistenti. Ogni CRO può servire fino a 384 unità immobiliari con fibra punto-punto.',
    chip: { label: 'Lavori avviati in tutti i comuni', type: 'chip-green' },
  },
  {
    year: 'Ottobre 2023',
    color: '#ff8800',
    title: 'Accordo KKR per NetCo',
    body: 'TIM sigla l\'accordo con KKR per la cessione dell\'intera rete fissa (NetCo), includendo FiberCop, la rete primaria, i data center wholesale. Il valore della transazione è di circa 18,8 miliardi di euro.',
    chip: null,
  },
  {
    year: '1° Luglio 2024',
    color: '#00c8ff',
    title: 'Completamento scorporo',
    body: 'KKR completa l\'acquisizione di NetCo. FiberCop diventa indipendente da TIM. TIM rimane come cliente/operatore della rete, ma non è più il proprietario. La rete fisica rimane invariata — cambia solo la proprietà.',
    chip: { label: 'KKR 100% via Optics BidCo', type: 'chip-blue' },
  },
  {
    year: 'Oggi',
    color: '#00e5a0',
    title: 'Per l\'utente finale: nulla cambia',
    body: 'Se hai la fibra FTTH di TIM, WindTre, Fastweb o altro operatore su rete FiberCop/Flash Fiber, il servizio non è cambiato. La fibra è la stessa, il CRO è lo stesso, il PTE in cantina è lo stesso. Ha cambiato mano solo la società che li possiede.',
    chip: { label: 'Nessun impatto sulla linea', type: 'chip-green' },
  },
]

export default function Timeline() {
  return (
    <section className="section section-dark" id="scorporo">
      <div className="container">
        <div className="section-label">Storia</div>
        <h2 className="section-title">Lo <span>scorporo</span> da TIM</h2>
        <p className="section-body">
          Dal 2021 ad oggi, FiberCop ha attraversato una profonda trasformazione societaria che l'ha resa
          completamente indipendente da TIM. Ecco cosa è successo — e perché per te non cambia nulla.
        </p>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute', left: 7, top: 12, bottom: 12, width: 2,
            background: 'linear-gradient(to bottom, #0055ff, #00c8ff, #00e5a0)',
            borderRadius: 2,
          }} />

          {events.map((ev, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < events.length - 1 ? 44 : 0 }}>
              {/* dot */}
              <div style={{
                position: 'absolute', left: -28, top: 4,
                width: 14, height: 14, borderRadius: '50%',
                background: ev.color, border: '2px solid var(--bg2)',
                boxShadow: `0 0 12px ${ev.color}80`,
              }} />

              <div>
                <span style={{
                  display: 'inline-block', fontSize: '.7rem', fontWeight: 700,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  color: ev.color, marginBottom: 6,
                }}>{ev.year}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{ev.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.92rem', lineHeight: 1.7, maxWidth: 680 }}>{ev.body}</p>
                {ev.chip && (
                  <span className={`chip ${ev.chip.type}`} style={{ marginTop: 10, display: 'inline-flex' }}>
                    {ev.chip.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
