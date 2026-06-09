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
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
          r: Math.random() * 1.5 + .5, alpha: Math.random() * .5 + .2,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,133,255,${.12 * (1 - d/120)})`
            ctx.lineWidth = .8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,133,255,${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    init(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 50%, #0a1f3d 0%, var(--bg) 65%)',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: .7 }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px 40px', maxWidth: 820 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
          padding: '6px 16px', borderRadius: 50, border: '1px solid rgba(245,180,43,.3)',
          background: 'rgba(245,180,43,.06)', fontSize: '.8rem', fontWeight: 600, color: 'var(--accent3)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block', boxShadow: '0 0 8px var(--accent3)' }} />
          FiberCop · Open Fiber · Fastweb — Italia
        </div>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: 900,
          letterSpacing: '-3px', lineHeight: 1.05, marginBottom: 28,
          background: 'linear-gradient(135deg, #ffffff 40%, #f5b42b 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Reti FTTH<br />in Italia
        </h1>

        <p style={{ fontSize: 'clamp(.95rem, 2vw, 1.2rem)', color: 'var(--muted)', maxWidth: 580, margin: '0 auto 48px', lineHeight: 1.7 }}>
          Confronta le tre infrastrutture in fibra ottica che portano
          il <strong style={{ color: 'var(--text)' }}>Gigabit</strong> nelle case italiane:
          architettura, tecnologia, copertura e differenze pratiche.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#confronto" style={{
            padding: '14px 32px', borderRadius: 4,
            background: '#f5b42b', color: '#000', fontWeight: 700, fontSize: '1rem',
            boxShadow: '0 0 30px rgba(245,180,43,.3)', textDecoration: 'none',
            transition: 'transform .2s, background .2s, box-shadow .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.background='#bd8c23'; e.currentTarget.style.boxShadow='0 0 50px rgba(245,180,43,.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='#f5b42b'; e.currentTarget.style.boxShadow='0 0 30px rgba(245,180,43,.3)'; }}
          >
            Confronta le reti →
          </a>
          <a href="#operatori" style={{
            padding: '14px 32px', borderRadius: 4,
            background: 'transparent', border: '2px solid #f5b42b',
            color: '#f5b42b', fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
            transition: 'background .2s, color .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#f5b42b'; e.currentTarget.style.color='#000'; }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#f5b42b'; }}
          >
            Dettagli operatore
          </a>
        </div>

        <div style={{ marginTop: 72, display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, overflow: 'hidden',
        }}>
          {[
            { n: '3', l: 'reti FTTH principali' },
            { n: '1 Gbps', l: 'velocità standard' },
            { n: '~20M', l: 'UIT raggiungibili' },
            { n: 'GPON', l: 'tecnologia comune' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '24px 32px', textAlign: 'center', flex: '1 1 140px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--accent3)', letterSpacing: '-1px' }}>{s.n}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', opacity: .4 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
