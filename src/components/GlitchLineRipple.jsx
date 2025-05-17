import React, { useState } from 'react'

const GLITCH_SYMBOLS = ['%', '$', '#', '@'];

const GlitchLineRipple = ({ text }) => {
  const [glitchIndices, setGlitchIndices] = useState([]);

  const triggerGlitch = (index) => {
    const indices = [];
    for (let i = index - 3; i <= index + 3; i++) {
      if (i >= 0 && i < text.length) {
        indices.push(i);
      }
    }

    let count = 0;
    const interval = setInterval(() => {
      setGlitchIndices(() =>
        indices.map(() => GLITCH_SYMBOLS[Math.floor(Math.random() * GLITCH_SYMBOLS.length)])
      );
      count++;
      if (count > 5) {
        clearInterval(interval);
        setGlitchIndices([]);
      }
    }, 50);
  };

  return (
    <p className="text-hackergreen text-shadow-glow-hack font-incon text-left whitespace-pre">
      {text.split('').map((char, i) => (
        <span
          key={i}
          onMouseEnter={() => triggerGlitch(i)}
          className="transition duration-100 cursor-default"
        >
          {glitchIndices.length && glitchIndices[i - (i - glitchIndices.length + 1)] ? 
            glitchIndices[i - (i - glitchIndices.length + 1)] || char :
            char}
        </span>
      ))}
    </p>
  );
};

export default GlitchLineRipple;
