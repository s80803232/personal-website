import { useState } from 'react'
import { courses, groupDiscount } from '../data/profile'

const fmt = (n) => n.toLocaleString('zh-TW')

export default function Courses({ onEnroll }) {
  const [plan, setPlan] = useState('personal')
  const isGroup = plan === 'group'

  return (
    <section id="courses" className="section courses">
      <div className="container">
        <header className="section__head section__head--row reveal">
          <div>
            <p className="eyebrow">Courses</p>
            <h2 className="section__title">課程資訊</h2>
            <p className="section__lead">為鑑識人員、執法單位與工程師設計的實務課程，理論與實作並重。</p>
          </div>

          <div className="plan-switch" role="radiogroup" aria-label="報名方案">
            <span className="plan-switch__thumb" data-plan={plan} aria-hidden="true" />
            <button role="radio" aria-checked={!isGroup} className={!isGroup ? 'is-active' : ''} onClick={() => setPlan('personal')}>
              個人報名
            </button>
            <button role="radio" aria-checked={isGroup} className={isGroup ? 'is-active' : ''} onClick={() => setPlan('group')}>
              機關團體 <em>8 折</em>
            </button>
          </div>
        </header>

        <div className="courses__grid">
          {courses.map((c, i) => {
            const price = isGroup ? Math.round(c.price * groupDiscount) : c.price
            return (
              <article
                key={c.id}
                className={`course card reveal ${c.featured ? 'course--featured' : ''}`}
                style={{ '--delay': `${i * 80}ms` }}
              >
                <div className="course__media">
                  <img src={c.image} alt={c.title} loading="lazy" width="1792" height="1024" />
                  <span className="course__level">{c.level}</span>
                  {c.featured && <span className="course__ribbon">熱門</span>}
                </div>

                <div className="course__body">
                  <h3>{c.title}</h3>
                  <p className="course__desc">{c.desc}</p>

                  <ul className="course__points">
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <div className="course__meta">
                    <span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {c.hours} 小時
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="12" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                      {c.mode}
                    </span>
                  </div>

                  <div className="course__footer">
                    <div className="course__price">
                      {isGroup && <s>NT$ {fmt(c.price)}</s>}
                      <strong key={plan}>
                        <small>NT$</small> {fmt(price)}
                      </strong>
                      <span>{isGroup ? '每人 / 10 人以上' : '每人'}</span>
                    </div>
                    <button className="btn btn--primary btn--sm" onClick={() => onEnroll(c.title, plan)}>
                      報名洽詢
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="courses__note reveal">＊ 可依單位需求客製課程內容與時數，歡迎來信洽詢包班與講座合作。</p>
      </div>
    </section>
  )
}
