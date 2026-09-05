import { ShieldCheck } from 'lucide-react';
import { SeverityTag } from '../components/StatusBadge.jsx';
import { complianceRules } from '../data/mockData.js';

export default function ComplianceRules() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Compliance Rules</h1>
        <p className="text-ink-500 text-sm mt-1.5">
          The mandatory labelling requirements every scan is evaluated against.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {complianceRules.map((rule) => (
          <div key={rule.id} className="rounded-2xl border border-line bg-base-800/50 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-signal-cyan/10 border border-signal-cyan/25 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4.5 h-4.5 text-signal-cyan" strokeWidth={1.75} />
              </div>
              <SeverityTag severity={rule.severity} />
            </div>
            <p className="text-[11px] font-mono text-ink-700 mb-1">{rule.id} · {rule.category}</p>
            <p className="text-ink-100 font-medium mb-2">{rule.name}</p>
            <p className="text-ink-300 text-sm leading-relaxed mb-3">{rule.description}</p>
            <p className="text-ink-700 text-xs border-t border-line pt-3">{rule.reference}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
