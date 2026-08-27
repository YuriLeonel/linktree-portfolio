import { useState, useEffect, useRef } from 'react';

interface GlitchProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function Glitch({ text, className = '', intensity = 'medium' }: GlitchProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      timeoutRef.current = setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const intensityStyles = {
    low: 'translate-x-[1px]',
    medium: 'translate-x-[2px]',
    high: 'translate-x-[4px]',
  };

  const negativeIntensityStyles = {
    low: '-translate-x-[1px]',
    medium: '-translate-x-[2px]',
    high: '-translate-x-[4px]',
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className={`absolute top-0 left-0 text-neon-green opacity-70 ${intensityStyles[intensity]}`}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className={`absolute top-0 left-0 text-neon-pink opacity-70 ${negativeIntensityStyles[intensity]}`}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
