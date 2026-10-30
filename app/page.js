import Link from 'next/link';
import Stars from './Stars';
import Flowers from './Flowers';
import { letters } from './letters';

export default function Home() {
  return (
    <main className="scene menu">
      <div className="glow" />
      <Flowers />
      <Stars />

      <header className="menu-head">
        <p className="menu-kicker">a little something for every celebration</p>
        <h1 className="menu-title">Just for you</h1>
        <div className="divider"><span>✦</span></div>
      </header>

      <nav className="menu-list">
        {letters.map((l, i) => (
          <Link key={l.slug} href={`/${l.slug}`} className="mini" style={{ '--i': i }}>
            <span className="mini-env">
              <span className="mini-flap" />
              <span className="mini-front" />
              <span className="seal mini-seal">{l.label[0]}</span>
            </span>
            <span className="menu-label">{l.label}</span>
            <span className="menu-sub">{l.title}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
