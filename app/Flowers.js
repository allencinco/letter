const COLORS = ['#ff9ec4', '#ffc2d9', '#ffffff', '#f06fa5', '#ffd6e6'];

// deterministic so server and client markup match
const FLOWERS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 29 + 7) % 100,
  top: (i * 47 + 11) % 100,
  size: 36 + ((i * 23) % 70),
  color: COLORS[i % COLORS.length],
  delay: -(i % 6) * 1.3,
  dur: 7 + (i % 5) * 1.5,
  blur: i % 4 === 0 ? 2 : 0,
}));

const PETALS = [0, 60, 120, 180, 240, 300];

export default function Flowers() {
  return FLOWERS.map((f, i) => (
    <svg
      key={i}
      className="flower"
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      style={{
        left: `${f.left}%`,
        top: `${f.top}%`,
        width: f.size,
        height: f.size,
        animationDelay: `${f.delay}s`,
        animationDuration: `${f.dur}s`,
        filter: f.blur ? `blur(${f.blur}px)` : undefined,
      }}
    >
      {PETALS.map((r) => (
        <ellipse key={r} cx="0" cy="-22" rx="14" ry="24" fill={f.color} transform={`rotate(${r})`} />
      ))}
      <circle r="11" fill="#ffd166" />
    </svg>
  ));
}
