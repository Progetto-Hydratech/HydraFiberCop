import { useState, useEffect } from 'react'

const links = [
  { href: '#chi-e', label: 'Chi è' },
  { href: '#scorporo', label: 'Scorporo' },
  { href: '#architettura', label: 'Architettura' },
  { href: '#gpon', label: 'GPON' },
  { href: '#copertura', label: 'Copertura' },
  { href: '#foto', label: 'Foto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background .3s, border-color .3s',
      background: scrolled ? 'rgba(8,16,31,.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 64, gap: 32 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{
            display: 'flex', gap: 3, alignItems: 'center',
          }}>
            {['#0085FF','#f5b42b','#bd8c23'].map((c,i) => (
              <span key={i} style={{ width: 7, height: 7, borderRadius: 2, background: c, display: 'block' }} />
            ))}
          </span>
          <span style={{ fontWeight: 800, fontSize: '.95rem', letterSpacing: '-.3px', color: 'var(--text)' }}>
            FiberCop<span style={{ color: 'var(--accent)' }}>Wiki</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, marginLeft: 'auto', flexWrap: 'wrap' }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              padding: '6px 14px', borderRadius: 8,
              fontSize: '.85rem', fontWeight: 500, color: 'var(--muted)',
              transition: 'color .15s, background .15s', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.target.style.color='var(--text)'; e.target.style.background='var(--surface)'; }}
            onMouseLeave={e => { e.target.style.color='var(--muted)'; e.target.style.background='transparent'; }}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
