import React, { useState } from 'react'

const GLITCH_SYMBOLS = ['%', '$', '#', '@'];

const GlitchCharAnimated = ({ char }) => {
  const [displayChar, setDisplayChar] = useState(char);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitch = () => {
    setIsGlitching(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomSymbol = GLITCH_SYMBOLS[Math.floor(Math.random() * GLITCH_SYMBOLS.length)];
      setDisplayChar(randomSymbol);
      count++;
      if (count > 5) { // Number of symbol changes
        clearInterval(interval);
        setDisplayChar(char);
        setIsGlitching(false);
      }
    }, 50); // Speed of glitch
  };

  return (
    <span
      onMouseEnter={() => {
        if (!isGlitching) glitch();
      }}
      className="transition-colors duration-100 cursor-default"
    >
      {displayChar}
    </span>
  );
};

export default GlitchCharAnimated;
