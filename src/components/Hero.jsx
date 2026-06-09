import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w, h
    const particles = []

    function resize() {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    function init() {
      resize()
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - .5) * .4,
          vy: (Math.random() - .5) * .4,
          r: Math.random() * 1.5 + .5,
          alpha: Math.random() * .5 + .2,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,200,255,${.12 * (1 - d/120)})`
            ctx.lineWidth = .8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      // draw dots
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,200,255,${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 50%, #06182e 0%, var(--bg) 65%)',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .7 }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px 40px', maxWidth: 780 }}>
        {/* badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
          padding: '6px 16px', borderRadius: 50, border: '1px solid rgba(0,200,255,.25)',
          background: 'rgba(0,200,255,.06)', fontSize: '.8rem', fontWeight: 600, color: 'var(--accent)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block', boxShadow: '0 0 8px var(--accent3)' }} />
          Infrastruttura FTTH GPON — Italia
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900,
          letterSpacing: '-3px', lineHeight: 1,
          marginBottom: 28,
          background: 'linear-gradient(135deg, #ffffff 30%, #00c8ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Rete<br />FiberCop
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--muted)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
          Come è strutturata la rete in fibra ottica che porta 1 Gbps
          nelle case di <strong style={{ color: 'var(--text)' }}>2578 comuni italiani</strong> —
          dai cavi in centrale fino al tuo appartamento.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#architettura" style={{
            padding: '14px 32px', borderRadius: 12,
            background: 'linear-gradient(135deg, var(--accent2), var(--accent))',
            color: '#fff', fontWeight: 700, fontSize: '1rem',
            boxShadow: '0 0 40px rgba(0,200,255,.25)', textDecoration: 'none',
            transition: 'transform .2s, box-shadow .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 60px rgba(0,200,255,.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 0 40px rgba(0,200,255,.25)'; }}
          >
            Esplora l'architettura →
          </a>
          <a href="#chi-e" style={{
            padding: '14px 32px', borderRadius: 12,
            background: 'var(--surface)', border: '1px solid var(--border)',
            color: 'var(--text)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
            transition: 'border-color .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
          >
            Chi è FiberCop
          </a>
        </div>

        {/* stats bar */}
        <div style={{ marginTop: 72, display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden',
        }}>
          {[
            { n: '2.578', l: 'comuni coperti' },
            { n: '13,6M', l: 'unità immobiliari' },
            { n: '1 Gbps', l: 'velocità download' },
            { n: '1:64', l: 'splitting GPON' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '24px 32px', textAlign: 'center', flex: '1 1 140px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-1px' }}>{s.n}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', opacity: .4 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
