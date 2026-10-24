import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);

      setTimeout(() => {
        setShowConfetti(true);
      }, 600);
    } else {
      // CLOSE
      setIsOpen(false);
      setShowConfetti(false);
    }
  };

  return (
    <div className="container">

      {/* ENVELOPE */}
      <div 
        className={`envelope ${isOpen ? 'opened' : ''}`} 
        onClick={handleClick}
      >
        <div className="envelope-flap"></div>
      </div>

      {/* LETTER */}
      <div className={`letter ${isOpen ? 'show' : ''}`}>
        <div className="letter-content">

          <h1 className="title">🎓 For Beron</h1>

          <p>Hi Beron, how are you? It’s been a while I hope you’re doing okay. I just wanted to say congratulations on your graduation hehe.</p>

          <p>
            You know, I’ve kind of known you for a while now, since you were still in senior high school. 
            I guess I know you a little bit hahaha. Of course, I’ve only seen you once, and we’re not really that close(?) siguro? hahaha, 
            so I’m a bit shy too.
          </p>

          <p>
            But still, I’ve seen you struggling, and all I could really do was comfort you through chats. 
            I know that you’re strong on the outside, but deep inside you’re very vulnerable. 
            Even so, you’re still able to handle everything.
          </p>

          <p>
            And you know what? I’m really proud of you. I also know that a lot of people are proud of you. 
            Soon, you’ll become an RN—I know you can do it, no sweat hahaha.
          </p>

          <p>
            I know you’ll be an amazing nurse—not just because you’re smart, but because you genuinely care about people. 
            No matter where life takes you, I’m always rooting for you. I’m always here for you.
          </p>

          <p>
            So congratulations again, Beron. This is all I could manage for now—I just made this through the web with a bit of coding 😅 
            I feel like it’s kind of corny hahaha. But still, congrats again. I’m so proud of you.
          </p>

          <div className="signature">
            <p>—Allen</p>
          </div>

        </div>
      </div>

      {/* CONFETTI */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => {
            const x = Math.random() * 500 - 250;
            const y = Math.random() * 500 - 250;
            const rotate = Math.random() * 720;

            return (
              <span
                key={i}
                className="confetti"
                style={{
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  '--r': `${rotate}deg`
                }}
              />
            );
          })}
        </div>
      )}

    </div>
  );
}

export default App;