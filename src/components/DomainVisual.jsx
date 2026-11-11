// 每個擅長領域的專屬動態插圖，顏色由父層 CSS 變數 --domain 控制
export default function DomainVisual({ type }) {
  switch (type) {
    case 'pixels':
      return (
        <svg viewBox="0 0 240 180" className="dv dv--pixels" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => {
            const x = (i % 8) * 28 + 8
            const y = Math.floor(i / 8) * 28 + 6
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="24"
                height="24"
                rx="3"
                style={{ animationDelay: `${(i * 37) % 1800}ms` }}
              />
            )
          })}
          <rect className="dv__focus" x="64" y="34" width="80" height="80" rx="4" />
        </svg>
      )
    case 'scan':
      return (
        <svg viewBox="0 0 240 180" className="dv dv--scan" aria-hidden="true">
          <g className="dv__mesh">
            {Array.from({ length: 7 }).map((_, i) => (
              <path key={`h${i}`} d={`M20 ${30 + i * 20} Q120 ${10 + i * 20} 220 ${30 + i * 20}`} />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={`v${i}`} d={`M${20 + i * 25} 26 L${20 + i * 25} 152`} />
            ))}
          </g>
          <line className="dv__beam" x1="10" y1="0" x2="10" y2="180" />
          <circle className="dv__node" cx="70" cy="70" r="5" />
          <circle className="dv__node" cx="160" cy="110" r="5" style={{ animationDelay: '0.6s' }} />
        </svg>
      )
    case 'wave':
      return (
        <svg viewBox="0 0 240 180" className="dv dv--wave" aria-hidden="true">
          <path className="dv__wave dv__wave--1" d="M0 70 Q15 30 30 70 T60 70 T90 70 T120 70 T150 70 T180 70 T210 70 T240 70 T270 70 T300 70" />
          <path className="dv__wave dv__wave--2" d="M0 70 Q30 100 60 70 T120 70 T180 70 T240 70 T300 70 T360 70" />
          {Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={i}
              className="dv__bar"
              x={10 + i * 14}
              y="120"
              width="9"
              height="50"
              style={{ animationDelay: `${i * 90}ms` }}
            />
          ))}
        </svg>
      )
    case 'circuit':
      return (
        <svg viewBox="0 0 240 180" className="dv dv--circuit" aria-hidden="true">
          <path className="dv__trace" d="M10 40 H80 V90 H150 V40 H230" />
          <path className="dv__trace" d="M10 140 H60 V110 H120 V150 H230" style={{ animationDelay: '0.8s' }} />
          <path className="dv__trace" d="M150 90 V130 H190" style={{ animationDelay: '1.4s' }} />
          <rect className="dv__chip" x="95" y="70" width="40" height="40" rx="4" />
          {[
            [80, 40],
            [150, 40],
            [60, 140],
            [120, 110],
            [190, 130],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} className="dv__pad" cx={cx} cy={cy} r="5" />
          ))}
        </svg>
      )
    case 'database':
      return (
        <svg viewBox="0 0 240 180" className="dv dv--database" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <g key={i} className="dv__disk" style={{ animationDelay: `${i * 250}ms` }}>
              <ellipse cx="90" cy={40 + i * 40} rx="56" ry="14" />
              <path d={`M34 ${40 + i * 40} v26 a56 14 0 0 0 112 0 v-26`} />
            </g>
          ))}
          <circle className="dv__lens" cx="175" cy="95" r="26" />
          <line className="dv__lens-handle" x1="193" y1="113" x2="222" y2="142" />
        </svg>
      )
    default:
      return null
  }
}
