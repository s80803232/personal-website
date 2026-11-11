import { useEffect, useState } from 'react'
import { achievements, publicationsByYear, timeline } from '../data/profile'
import { useInView } from '../hooks'

const maxCount = Math.max(...publicationsByYear.map((p) => p.count))

function PublicationChart() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <div className={`chart card ${inView ? 'is-in' : ''}`} ref={ref}>
      <div className="chart__head">
        <div>
          <p className="eyebrow">Publications</p>
          <h3>期刊論文年度分布</h3>
        </div>
        <p className="chart__total">
          <strong>53</strong> 篇 / 1997–2013
        </p>
      </div>
      <div className="chart__bars" role="img" aria-label="1997 至 2013 年期刊論文數量長條圖，2005 年最多 9 篇">
        {publicationsByYear.map((p, i) => (
          <div className="chart__col" key={p.year}>
            <div
              className={`chart__bar ${p.count === maxCount ? 'is-peak' : ''}`}
              style={{ '--h': `${(p.count / maxCount) * 100}%`, '--d': `${i * 45}ms` }}
              tabIndex={0}
            >
              <span className="chart__tip">
                {p.year}：{p.count} 篇
              </span>
            </div>
            <span className="chart__year">{String(p.year).slice(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Achievements() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // 自動輪播，滑鼠移入時暫停
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((i) => (i + 1) % achievements.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: y * -6, y: x * 8 })
  }

  const current = achievements[active]

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Achievements</p>
          <h2 className="section__title">個人成就</h2>
          <p className="section__lead">代表性研究成果，涵蓋影像融合、指紋還原、3D 現場重建與監視系統分析。</p>
        </header>

        <div
          className={`showcase ${paused ? 'is-paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false)
            setTilt({ x: 0, y: 0 })
          }}
        >
          <ol className="showcase__list">
            {achievements.map((a, i) => (
              <li key={a.id}>
                <button
                  className={`showcase__item ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="showcase__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="showcase__text">
                    <span className="showcase__tag">{a.tag}</span>
                    <strong>{a.title}</strong>
                    <em>{a.venue}</em>
                  </span>
                  <span className="showcase__progress" key={`${active}-${paused}`} />
                </button>
                {/* 手機版：圖片與說明直接放在項目內 */}
                <div className="showcase__mobile">
                  <img src={a.image} alt={a.title} loading="lazy" width="1280" height="960" />
                  <p>{a.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="showcase__stage"
            onMouseMove={onMove}
            style={{ '--rx': `${tilt.x}deg`, '--ry': `${tilt.y}deg` }}
          >
            <div className="showcase__frame">
              {achievements.map((a, i) => (
                <img
                  key={a.id}
                  src={a.image}
                  alt={a.title}
                  className={i === active ? 'is-active' : ''}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  width="1280"
                  height="960"
                />
              ))}
              <div className="showcase__overlay" key={current.id}>
                <p>{current.desc}</p>
                <dl>
                  {current.metrics.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements__bottom">
          <div className="reveal">
            <PublicationChart />
          </div>

          <div className="timeline card reveal">
            <p className="eyebrow">Career</p>
            <h3>學經歷里程碑</h3>
            <ol>
              {timeline.map((t) => (
                <li key={t.period + t.role}>
                  <span className="timeline__period">{t.period}</span>
                  <strong>{t.role}</strong>
                  <span className="timeline__org">{t.org}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
