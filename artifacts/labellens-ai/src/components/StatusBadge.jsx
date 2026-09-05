import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';

const STATUS_MAP = {
  Compliant: { color: 'text-signal-green', bg: 'bg-signal-green/10', border: 'border-signal-green/30', icon: CheckCircle2 },
  'Partially Compliant': { color: 'text-signal-amber', bg: 'bg-signal-amber/10', border: 'border-signal-amber/30', icon: AlertTriangle },
  'Non-Compliant': { color: 'text-signal-red', bg: 'bg-signal-red/10', border: 'border-signal-red/30', icon: XCircle },
  PASS: { color: 'text-signal-green', bg: 'bg-signal-green/10', border: 'border-signal-green/30', icon: CheckCircle2 },
  WARNING: { color: 'text-signal-amber', bg: 'bg-signal-amber/10', border: 'border-signal-amber/30', icon: AlertTriangle },
  VIOLATION: { color: 'text-signal-red', bg: 'bg-signal-red/10', border: 'border-signal-red/30', icon: XCircle },
  Pending: { color: 'text-ink-500', bg: 'bg-ink-500/10', border: 'border-ink-500/30', icon: Clock },
};

export default function StatusBadge({ status, size = 'md' }) {
  const cfg = STATUS_MAP[status] || STATUS_MAP.Pending;
  const Icon = cfg.icon;
  const sizing = size === 'sm' ? 'text-[11px] px-2 py-0.5 gap-1' : 'text-xs px-2.5 py-1 gap-1.5';
  return (
    <span
      data-testid={`status-badge-${String(status).toLowerCase().replace(/\s+/g, '-')}`}
      className={`inline-flex items-center rounded-full border font-medium ${cfg.color} ${cfg.bg} ${cfg.border} ${sizing}`}
    >
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} strokeWidth={2.25} />
      {status}
    </span>
  );
}

export function SeverityTag({ severity }) {
  const map = {
    High: 'text-signal-red bg-signal-red/10 border-signal-red/30',
    Medium: 'text-signal-amber bg-signal-amber/10 border-signal-amber/30',
    Low: 'text-ink-300 bg-ink-500/10 border-ink-500/25',
  };
  return (
    <span data-testid={`severity-tag-${String(severity).toLowerCase()}`} className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${map[severity] || map.Low}`}>
      {severity}
    </span>
  );
}
