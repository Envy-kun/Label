import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function scoreColor(score) {
  if (score >= 85) return '#33C97F';
  if (score >= 60) return '#E8AA3F';
  return '#E85C5C';
}

function scoreLabel(score) {
  if (score >= 85) return 'Compliant';
  if (score >= 60) return 'Partially Compliant';
  return 'Non-Compliant';
}

export default function ComplianceScoreRing({ score, size = 180, strokeWidth = 12, showLabel = true }) {
  const [display, setDisplay] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const color = scoreColor(score);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1100;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * score));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  const offset = circumference - (display / 100) * circumference;

  return (
    <div data-testid="dynamic-compliance-score" className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1A2236"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span data-testid="text-compliance-score" className="font-display text-4xl text-ink-100 tabular-nums">{display}</span>
        <span className="text-ink-500 text-xs">/ 100</span>
        {showLabel && (
          <span className="mt-2 text-[11px] font-medium tracking-wide" style={{ color }}>
            {scoreLabel(score)}
          </span>
        )}
      </div>
    </div>
  );
}
