import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Achievements from './components/Achievements'
import Courses from './components/Courses'
import Contact from './components/Contact'
import { useRevealAll } from './hooks'

export default function App() {
  const [preset, setPreset] = useState(null)
  useRevealAll()

  // 課程卡片「報名洽詢」→ 帶入聯絡表單並捲動
  const handleEnroll = (topic, plan) => {
    setPreset({ topic, plan, ts: Date.now() })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Achievements />
        <Courses onEnroll={handleEnroll} />
        <Contact preset={preset} />
      </main>
    </>
  )
}
