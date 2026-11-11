import { useEffect, useState } from 'react'
import { contact, courses } from '../data/profile'

const topics = [...courses.map((c) => c.title), '演講 / 講座邀約', '鑑識技術諮詢', '產學合作', '其他']
const empty = { name: '', email: '', org: '', topic: topics[0], message: '' }

function validate(f) {
  const err = {}
  if (!f.name.trim()) err.name = '請填寫姓名'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) err.email = '請填寫有效的 Email'
  if (f.message.trim().length < 10) err.message = '請至少輸入 10 個字，方便我們了解需求'
  return err
}

export default function Contact({ preset }) {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  // 從課程卡片點「報名洽詢」帶入主旨
  useEffect(() => {
    if (!preset) return
    setForm((f) => ({
      ...f,
      topic: preset.topic,
      message: f.message || `您好，我想詢問「${preset.topic}」${preset.plan === 'group' ? '機關團體' : '個人'}報名的開課時間與細節。`,
    }))
    setSent(false)
  }, [preset])

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const err = validate(form)
    setErrors(err)
    if (Object.keys(err).length) return

    // 無後端時以 mailto 開啟郵件軟體；之後可替換為 API / Formspree
    const body = `姓名：${form.name}\nEmail：${form.email}\n單位：${form.org || '-'}\n\n${form.message}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`[洽詢] ${form.topic}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm(empty)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info reveal">
          <p className="eyebrow eyebrow--light">Contact</p>
          <h2 className="section__title">聯絡洽詢</h2>
          <p className="contact__lead">課程報名、演講邀約、鑑識技術諮詢或產學合作，歡迎與我聯繫，將於 3 個工作天內回覆。</p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <small>Email</small>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
              </span>
              <div>
                <small>電話（總機）</small>
                <a href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}>{contact.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <small>{contact.org}</small>
                <span>{contact.address}</span>
              </div>
            </li>
          </ul>

          <div className="contact__map">
            <iframe
              title="中央警察大學地圖"
              src="https://www.google.com/maps?q=%E4%B8%AD%E5%A4%AE%E8%AD%A6%E5%AF%9F%E5%A4%A7%E5%AD%B8&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact__form card reveal" onSubmit={onSubmit} noValidate>
          {sent && (
            <div className="form__success" role="status">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 5 5 9-10" />
              </svg>
              已開啟郵件軟體，送出後我們會盡快回覆您！
            </div>
          )}

          <div className="form__row">
            <label className={`field ${errors.name ? 'has-error' : ''}`}>
              <span>姓名 *</span>
              <input value={form.name} onChange={update('name')} placeholder="王小明" autoComplete="name" />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className={`field ${errors.email ? 'has-error' : ''}`}>
              <span>Email *</span>
              <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" autoComplete="email" />
              {errors.email && <em>{errors.email}</em>}
            </label>
          </div>

          <div className="form__row">
            <label className="field">
              <span>服務單位</span>
              <input value={form.org} onChange={update('org')} placeholder="選填" autoComplete="organization" />
            </label>
            <label className="field">
              <span>洽詢主題</span>
              <select value={form.topic} onChange={update('topic')}>
                {topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>

          <label className={`field ${errors.message ? 'has-error' : ''}`}>
            <span>需求說明 *</span>
            <textarea rows="5" value={form.message} onChange={update('message')} placeholder="請簡述您的需求、預計人數或時間…" />
            {errors.message && <em>{errors.message}</em>}
          </label>

          <button type="submit" className="btn btn--accent btn--block">
            送出洽詢
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M4 12 20 4l-6 16-3-7-7-1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} 溫哲彥 Che-Yen Wen · {contact.org}</p>
          <a href="#home">回到頂部 ↑</a>
        </div>
      </footer>
    </section>
  )
}
