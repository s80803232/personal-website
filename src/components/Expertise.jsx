import { useRef, useState } from 'react'
import { expertise } from '../data/profile'
import DomainVisual from './DomainVisual'

export default function Expertise() {
  const [activeId, setActiveId] = useState(expertise[0].id)
  const tabsRef = useRef([])
  const index = expertise.findIndex((e) => e.id === activeId)
  const active = expertise[index]

  // 方向鍵切換（無障礙）
  const onKeyDown = (e) => {
    const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!dir) return
    e.preventDefault()
    const next = (index + dir + expertise.length) % expertise.length
    setActiveId(expertise[next].id)
    tabsRef.current[next]?.focus()
  }

  return (
    <section id="expertise" className="section expertise" style={{ '--domain': active.color }}>
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Expertise</p>
          <h2 className="section__title">擅長領域</h2>
          <p className="section__lead">五大研究主軸，從底層訊號到上層資料庫，構成完整的數位鑑識技術鏈。</p>
        </header>

        <div className="expertise__layout reveal">
          <div className="expertise__tabs" role="tablist" aria-label="擅長領域" onKeyDown={onKeyDown}>
            {expertise.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => (tabsRef.current[i] = el)}
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={item.id === activeId}
                aria-controls={`panel-${item.id}`}
                tabIndex={item.id === activeId ? 0 : -1}
                className={`expertise__tab ${item.id === activeId ? 'is-active' : ''}`}
                style={{ '--tab': item.color }}
                onClick={() => setActiveId(item.id)}
              >
                <span className="expertise__num">0{i + 1}</span>
                <span className="expertise__tab-text">
                  {item.name}
                  <small>{item.en}</small>
                </span>
              </button>
            ))}
          </div>

          <article
            key={active.id}
            className="expertise__panel"
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
          >
            <div className="expertise__panel-body">
              <p className="expertise__en">{active.en}</p>
              <h3>{active.name}</h3>
              <p className="expertise__desc">{active.desc}</p>

              <ul className="chips">
                {active.keywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>

              <div className="expertise__cases">
                <h4>代表應用</h4>
                <ul>
                  {active.cases.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="meter">
                <div className="meter__head">
                  <span>研究投入度</span>
                  <strong>{active.level}%</strong>
                </div>
                <div className="meter__track">
                  <div className="meter__fill" style={{ '--w': `${active.level}%` }} />
                </div>
              </div>
            </div>

            <div className="expertise__visual">
              <DomainVisual type={active.visual} />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
