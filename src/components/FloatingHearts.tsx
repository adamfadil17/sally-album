// Hati-hati melayang di belakang album (posisi dibuat deterministik agar aman untuk SSR)
const COLORS = ["#e9b3b8", "#efc9c9", "#c98a90"];
const HEARTS = Array.from({ length: 18 }, (_, i) => ({
  x: (i * 37 + 11) % 100,
  size: 14 + ((i * 7) % 20),
  duration: 14 + ((i * 5) % 12),
  delay: -((i * 3.7) % 22),
  drift: (i % 2 ? 1 : -1) * (20 + ((i * 13) % 40)),
  color: COLORS[i % COLORS.length],
}));

export default function FloatingHearts() {
  return (
    <div className="hearts" aria-hidden="true">
      {HEARTS.map((h, i) => (
        <svg
          key={i}
          className="heart"
          viewBox="0 0 24 24"
          style={{
            left: `${h.x}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay.toFixed(1)}s`,
            ["--drift" as string]: `${h.drift}px`,
          }}
        >
          <path fill={h.color} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
}
