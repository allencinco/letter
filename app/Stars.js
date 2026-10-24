// deterministic so server and client markup match
const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 2 + (i % 3),
  delay: (i % 7) * 0.6,
  dur: 3 + (i % 4),
}));

export default function Stars() {
  return STARS.map((s, i) => (
    <span
      key={i}
      className="star"
      style={{
        left: `${s.left}%`,
        top: `${s.top}%`,
        width: s.size,
        height: s.size,
        animationDelay: `${s.delay}s`,
        animationDuration: `${s.dur}s`,
      }}
    />
  ));
}
