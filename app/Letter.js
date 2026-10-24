'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Stars from './Stars';
import Flowers from './Flowers';

const COLORS = ['#ff6b6b', '#ffd166', '#4dabf7', '#69db7c', '#f783ac', '#b197fc'];

const makeConfetti = () =>
  Array.from({ length: 90 }, () => ({
    x: Math.random() * 100,
    dx: Math.random() * 200 - 100,
    delay: Math.random() * 0.6,
    dur: 2.5 + Math.random() * 2,
    rot: Math.random() * 900 - 450,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 10,
    round: Math.random() > 0.7,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

export default function Letter({ letter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const timer = useRef(null);

  const toggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      timer.current = setTimeout(() => setConfetti(makeConfetti()), 900);
    } else {
      clearTimeout(timer.current);
      setIsOpen(false);
      setConfetti([]);
    }
  };

  return (
    <main className={`scene ${isOpen ? 'is-open' : ''}`}>
      {/* BACKDROP */}
      <div className="glow" />
      <Flowers />
      <Stars />

      <Link href="/" className="back">← All letters</Link>

      {/* ENVELOPE */}
      <button
        className="envelope"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close the letter' : 'Open the letter'}
      >
        <span className="env-back" />
        <span className="env-flap" />
        <span className="env-front" />
        <span className="seal">{letter.signature.replace(/\W/g, '')[0]}</span>
      </button>
      <p className="hint">tap to open</p>

      {/* LETTER */}
      <article className="letter" aria-hidden={!isOpen}>
        <div className="letter-scroll">
          <div className="ribbon">{letter.ribbon}</div>
          <h1 className="title">{letter.title}</h1>
          <div className="divider"><span>✦</span></div>

          {letter.paragraphs.map((text, i) => (
            <p key={i} className="para" style={{ '--i': i }}>{text}</p>
          ))}

          <div className="signature para" style={{ '--i': letter.paragraphs.length }}>{letter.signature}</div>

          <button className="close" onClick={toggle} tabIndex={isOpen ? 0 : -1}>
            Close letter
          </button>
        </div>
      </article>

      {/* CONFETTI */}
      <div className="confetti-layer" aria-hidden="true">
        {confetti.map((c, i) => (
          <span
            key={i}
            className="confetti"
            style={{
              left: `${c.x}%`,
              width: c.w,
              height: c.round ? c.w : c.h,
              borderRadius: c.round ? '50%' : 2,
              background: c.color,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.dur}s`,
              '--dx': `${c.dx}px`,
              '--r': `${c.rot}deg`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
