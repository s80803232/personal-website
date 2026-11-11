import { profile, stats } from '../data/profile'
import { useCountUp, useInView } from '../hooks'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <strong>
        {n}
        <span>{suffix}</span>
      </strong>
      <p>{label}</p>
    </div>
  )
}

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.4 })

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">
            <span className="dot" /> {profile.orgEn}
          </p>
          <h1 className="hero__title">
            {profile.name}
            <span className="hero__role">{profile.title}</span>
          </h1>
          <p className="hero__en">{profile.nameEn}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <dl className="hero__facts">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__actions">
            <a href="#courses" className="btn btn--accent">
              查看課程
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              演講 / 鑑識諮詢邀約
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="portrait">
            <span className="portrait__corner portrait__corner--tl" />
            <span className="portrait__corner portrait__corner--tr" />
            <span className="portrait__corner portrait__corner--bl" />
            <span className="portrait__corner portrait__corner--br" />
            <img src={profile.photo} alt={`${profile.name}${profile.title}形象照`} width="316" height="400" />
            <span className="portrait__scan" aria-hidden="true" />
            <span className="portrait__label">ID · CPU-FS · 1999</span>
          </div>
          <div className="hero__badge hero__badge--top">
            <strong>6</strong>
            <span>本專書 / 譯著</span>
          </div>
          <div className="hero__badge hero__badge--bottom">
            <strong>Ph.D.</strong>
            <span>SUNY Buffalo · ECE</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats" ref={statsRef}>
          {stats.map((s) => (
            <Stat key={s.label} {...s} start={statsInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
