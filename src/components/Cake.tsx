// Kue ulang tahun animasi (SVG + CSS, tanpa dependensi)
export default function Cake() {
  const candles = [44, 58, 72];
  return (
    <svg className="cake" viewBox="0 0 120 112" role="img" aria-label="Kue ulang tahun dengan lilin menyala">
      <g className="cake-bob">
        <ellipse cx="60" cy="102" rx="50" ry="6" fill="#e6d2c3" />
        <rect x="14" y="64" width="92" height="36" rx="9" fill="#f3c6ca" />
        <path d="M14 73c8 8 12-2 20 4s12-6 20 2 12-6 20 2 12-6 20 2 8 0 12-4v-9a9 9 0 0 0-9-9H23a9 9 0 0 0-9 9z" fill="#fffaf3" />
        <rect x="30" y="42" width="60" height="24" rx="7" fill="#f8dcdc" />
        <path d="M30 51c6 6 9-2 15 3s9-5 15 2 9-5 15 2 9-2 15-3v-6a7 7 0 0 0-7-7H37a7 7 0 0 0-7 7z" fill="#fffaf3" />
        {[26, 46, 66, 86].map((x) => <circle key={x} cx={x + 4} cy="88" r="2.6" fill="#b9747b" />)}
        {candles.map((x, i) => (
          <g key={x}>
            <rect x={x} y="28" width="5" height="15" rx="1.5" fill={i % 2 ? "#efc9c9" : "#e9b3b8"} />
            <path className="flame" style={{ animationDelay: `${i * 0.25}s` }} d={`M${x + 2.5} 14c3 4 4 7 0 11-4-4-3-7 0-11z`} fill="#f6b73c" />
          </g>
        ))}
      </g>
      {[[10, 24, 0], [108, 18, 0.6], [100, 54, 1.2], [18, 56, 1.8], [60, 6, 0.9]].map(([x, y, d]) => (
        <path key={`${x}-${y}`} className="sparkle" style={{ animationDelay: `${d}s` }} d={`M${x} ${y - 4}l1.2 2.8 2.8 1.2-2.8 1.2L${x} ${y + 4}l-1.2-2.8-2.8-1.2 2.8-1.2z`} fill="#c98a90" />
      ))}
    </svg>
  );
}
