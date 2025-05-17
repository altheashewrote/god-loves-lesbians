import React from 'react'

const HoverText = ({ text }) => {
    return (
      <span className="inline-block">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="transition-colors duration-50 hover:text-white"
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

export default HoverText