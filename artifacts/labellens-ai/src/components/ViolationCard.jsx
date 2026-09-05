import { AlertOctagon, AlertTriangle, Lightbulb } from 'lucide-react';
import { SeverityTag } from './StatusBadge.jsx';

export default function ViolationCard({ violation }) {
  const isHigh = violation.severity === 'High';
  const Icon = isHigh ? AlertOctagon : AlertTriangle;
  const colorClass = isHigh ? 'text-signal-red' : 'text-signal-amber';
  const borderClass = isHigh ? 'border-signal-red/25' : 'border-signal-amber/25';

  return (
    <div data-testid={`card-violation-${violation.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className={`rounded-xl border ${borderClass} bg-base-800/50 p-5`}>
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-base-950 border ${borderClass}`}>
          <Icon className={`w-4.5 h-4.5 ${colorClass}`} strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <SeverityTag severity={violation.severity} />
            <span className="text-[11px] uppercase tracking-wide text-ink-500">Priority</span>
          </div>
          <p className="text-ink-100 font-medium mb-1.5">{violation.title}</p>
          <p className="text-sm text-ink-300 leading-relaxed">{violation.description}</p>
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-base-950/60 border border-line px-3 py-2.5">
            <Lightbulb className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
            <p className="text-sm text-ink-300">
              <span className="text-ink-100 font-medium">Recommendation: </span>
              {violation.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
