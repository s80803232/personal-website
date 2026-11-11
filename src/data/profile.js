import profilePhoto from '../assets/images/profile.jpg'
import achFusion from '../assets/images/ach-fusion.jpg'
import achFingerprint from '../assets/images/ach-fingerprint.jpg'
import ach3dScan from '../assets/images/ach-3dscan.jpg'
import achCctv from '../assets/images/ach-cctv.jpg'
import courseImageForensics from '../assets/images/course-image-forensics.jpg'
import courseCctv from '../assets/images/course-cctv.jpg'
import coursePython from '../assets/images/course-python.jpg'
import courseSignal from '../assets/images/course-signal.jpg'

// 資料來源：簡歷.md、著作目錄.pdf
export const profile = {
  name: '溫哲彥',
  nameEn: 'Che-Yen Wen, Ph.D.',
  title: '教授',
  org: '中央警察大學 鑑識科學學系',
  orgEn: 'Department of Forensic Science, Central Police University',
  photo: profilePhoto,
  tagline: '以影像處理與訊號分析，讓數位證據說出真相。',
  summary:
    '專注於數位影像鑑識、電腦輔助鑑識與數位訊號處理逾三十年，曾任中央警察大學鑑識科學學系系主任與電算中心主任，研究成果發表於 Journal of Forensic Sciences、Forensic Science International 等國際期刊。',
  facts: [
    { label: '現職', value: '中央警察大學 鑑識科學學系 教授' },
    { label: '學歷', value: '美國紐約州立大學水牛城分校 電機與電腦工程 博士' },
    { label: '曾任', value: '鑑識科學學系 系主任（2016–2022）' },
  ],
}

export const stats = [
  { value: 30, suffix: '+', label: '年教學研究資歷' },
  { value: 53, suffix: '', label: '篇期刊論文' },
  { value: 22, suffix: '', label: '篇 SCI 期刊' },
  { value: 55, suffix: '', label: '篇研討會論文' },
]

// 每個領域都有自己的主色，切換時整個面板跟著換色
export const expertise = [
  {
    id: 'image',
    name: '電腦影像處理與鑑識',
    en: 'Image Processing & Forensics',
    color: '#3B82F6',
    visual: 'pixels',
    desc: '針對模糊、失焦、低解析度與變形的影像證據，運用影像還原、增強、融合與真偽驗證技術，提升可辨識度並確保證據可採性。',
    keywords: ['影像還原', '多解析度融合', '浮水印與真偽驗證', '車牌 3D 校正'],
    cases: ['監視器模糊車牌還原', '指紋紋路數位重建', '數位影像證據完整性驗證'],
    level: 98,
  },
  {
    id: 'cad',
    name: '電腦輔助鑑識',
    en: 'Computer-Aided Forensics',
    color: '#10B981',
    visual: 'scan',
    desc: '結合 3D 雷射掃描、電腦視覺與自動化檢索，建立刑案現場數位重建與工具痕跡比對流程，縮短鑑定時間並降低人為誤差。',
    keywords: ['3D 雷射掃描', '工具痕跡比對', '人貌比對', '現場測繪'],
    cases: ['刑案現場 3D 重建與血跡量計算', '條紋痕跡 LCS 相似度量測', '3D 模型與 2D 照片人貌比對'],
    level: 92,
  },
  {
    id: 'dsp',
    name: '數位訊號處理',
    en: 'Digital Signal Processing',
    color: '#8B5CF6',
    visual: 'wave',
    desc: '以小波轉換、傅立葉分析、碎形維度與獨立成分分析（ICA）等方法，萃取影像與訊號中的關鍵特徵，應用於紋理分析與混合影像分離。',
    keywords: ['小波轉換', '碎形分析', 'ICA 獨立成分分析', 'Hough 轉換'],
    cases: ['紋理瑕疵自動檢測', '混合影像分離', '大氣能見度影像量測'],
    level: 90,
  },
  {
    id: 'electric',
    name: '鑑識電學',
    en: 'Forensic Electrical Engineering',
    color: '#F59E0B',
    visual: 'circuit',
    desc: '從電路、電子元件與電氣系統角度分析事故與跡證，並將電機工程基礎轉化為鑑識人員可實際操作的分析方法與教學內容。',
    keywords: ['警用電學', '電路分析', '電氣跡證', '儀器原理'],
    cases: ['警用電學課程教學', '電氣設備跡證分析', '鑑識儀器原理培訓'],
    level: 85,
  },
  {
    id: 'database',
    name: '鑑識資料庫',
    en: 'Forensic Databases',
    color: '#F43F5E',
    visual: 'database',
    desc: '以內容式影像檢索（CBIR）建立槍枝、藥錠、犯罪現場影像等鑑識資料庫，讓大量跡證能被快速搜尋、比對與交叉分析。',
    keywords: ['CBIR 內容式檢索', '槍枝影像檢索', '藥錠影像資料庫', '犯罪情資擷取'],
    cases: ['藥錠影像檢索系統', '槍枝形狀檢索', '監視影片內容檢索'],
    level: 88,
  },
]

export const achievements = [
  {
    id: 'fusion',
    tag: 'SCI · 最高被引',
    title: '多解析度影像融合技術',
    venue: 'Forensic Science International, Vol.140 (2004)',
    desc: '提出多解析度影像融合方法，將多張品質不一的證據影像融合為單一高辨識度影像，是個人著作中被引用次數最高的論文。',
    metrics: [
      { label: '被引用', value: '18 次' },
      { label: 'Impact Factor', value: '1.821' },
    ],
    image: achFusion,
  },
  {
    id: 'fingerprint',
    tag: 'SCI',
    title: '指紋紋路數位還原',
    venue: 'Journal of Forensic Sciences, 48(5) (2003)',
    desc: '以數位影像處理技術重建殘缺、受雜訊干擾的指紋紋路，提升比對可用的特徵點數量，獲國科會計畫支持。',
    metrics: [
      { label: '期刊排名', value: '7 / 13' },
      { label: '計畫編號', value: 'NSC91-2213' },
    ],
    image: achFingerprint,
  },
  {
    id: 'scan',
    tag: '系列研究 2011–2013',
    title: '3D 雷射掃描現場重建',
    venue: '鑑識科學研討會、刑事警察學術研討會',
    desc: '將 3D 雷射掃描導入刑案現場測繪、證物建模與血跡量計算，建立可重複驗證的數位現場紀錄流程。',
    metrics: [
      { label: '相關論文', value: '4 篇' },
      { label: '應用場域', value: '刑案現場' },
    ],
    image: ach3dScan,
  },
  {
    id: 'cctv',
    tag: 'SCI × 4',
    title: '監視系統智慧影像分析',
    venue: 'Journal of Forensic Sciences (2002–2006)',
    desc: '涵蓋車牌 3D 校正、安全帽與口罩遮蔽偵測、CCTV 影像品質改善，奠定國內監視器影像鑑識的關鍵方法。',
    metrics: [
      { label: 'JFS 論文', value: '4 篇' },
      { label: '研究期間', value: '2002–2006' },
    ],
    image: achCctv,
  },
]

// 期刊論文年度分布（依著作目錄統計）
export const publicationsByYear = [
  { year: 1997, count: 3 },
  { year: 1998, count: 3 },
  { year: 2000, count: 1 },
  { year: 2001, count: 3 },
  { year: 2002, count: 3 },
  { year: 2003, count: 2 },
  { year: 2004, count: 8 },
  { year: 2005, count: 9 },
  { year: 2006, count: 3 },
  { year: 2007, count: 1 },
  { year: 2008, count: 4 },
  { year: 2009, count: 1 },
  { year: 2010, count: 1 },
  { year: 2011, count: 2 },
  { year: 2012, count: 5 },
  { year: 2013, count: 4 },
]

export const timeline = [
  { period: '2016 – 2022', role: '教授兼系主任', org: '中央警察大學 鑑識科學學系' },
  { period: '2010 – 2016', role: '電算中心主任', org: '中央警察大學' },
  { period: '2004 – 至今', role: '教授', org: '中央警察大學 鑑識科學學系' },
  { period: '1999 – 2004', role: '副教授', org: '中央警察大學 鑑識科學學系' },
  { period: '1997 – 1999', role: '資訊管理科主任', org: '弘光技術學院' },
  { period: '1993 – 1996', role: '電機與電腦工程 博士', org: 'SUNY Buffalo' },
]

// TODO: 課程內容與價格為示意，請依實際開課資訊調整
export const courses = [
  {
    id: 'image-forensics',
    title: '數位影像鑑識實務工作坊',
    level: '進階',
    image: courseImageForensics,
    desc: '從影像增強、模糊還原到真偽驗證，帶你走完一份可上法庭的影像鑑定報告。',
    points: ['影像還原與增強', '真偽與竄改偵測', '證據保全流程'],
    hours: 12,
    mode: '實體',
    price: 12800,
    featured: true,
  },
  {
    id: 'cctv',
    title: '監視錄影分析與車牌辨識',
    level: '中階',
    image: courseCctv,
    desc: '針對低解析度、夜間與傾斜視角的監視畫面，實作目標追蹤與車牌校正。',
    points: ['移動偵測與追蹤', '車牌 3D 校正', '影片內容檢索'],
    hours: 18,
    mode: '實體',
    price: 15800,
  },
  {
    id: 'python',
    title: 'Python 影像處理入門',
    level: '入門',
    image: coursePython,
    desc: '零基礎也能上手：用 Python 與 OpenCV 完成濾波、邊緣偵測與特徵擷取。',
    points: ['OpenCV 基礎', '濾波與邊緣偵測', '特徵擷取實作'],
    hours: 24,
    mode: '線上',
    price: 9800,
  },
  {
    id: 'signal',
    title: '數位訊號處理與鑑識電學',
    level: '中階',
    image: courseSignal,
    desc: '以傅立葉、小波與碎形分析理解訊號本質，並連結到電氣跡證的實務判讀。',
    points: ['傅立葉與小波', '碎形維度分析', '電氣跡證判讀'],
    hours: 16,
    mode: '混成',
    price: 11500,
  },
]

export const groupDiscount = 0.8

// TODO: 請替換為實際聯絡資訊
export const contact = {
  email: 'contact@example.com',
  phone: '(03) 328-2321',
  address: '333 桃園市龜山區大崗里樹人路 56 號',
  org: '中央警察大學 鑑識科學學系',
}
