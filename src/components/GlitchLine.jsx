import GlitchCharAnimated from './GlitchCharAnimated';

const GlitchLine = ({ text }) => (
  <p className="text-barbie text-shadow-glow-barbie font-bold font-dot text-left whitespace-pre">
    {text.split("").map((c, i) => (
      <GlitchCharAnimated key={i} char={c} />
    ))}
  </p>
);

export default GlitchLine;
