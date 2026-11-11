import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks'

const links = [
  { id: 'home', label: '首頁' },
  { id: 'expertise', label: '擅長領域' },
  { id: 'achievements', label: '個人成就' },
  { id: 'courses', label: '課程資訊' },
  { id: 'contact', label: '聯絡洽詢' },
]
const ids = links.map((l) => l.id)

export default function Navbar() {
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">CW</span>
          <span className="nav__brand-text">
            溫哲彥 <small>Forensic Imaging Lab</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="主要導覽">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--accent nav__cta" onClick={() => setOpen(false)}>
            預約諮詢
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? '關閉選單' : '開啟選單'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
