export default function StatCard({ label, value, delta, deltaTone = 'up', icon: Icon, accent = 'cyan' }) {
  const accentMap = {
    cyan: 'text-signal-cyan bg-signal-cyan/10',
    green: 'text-signal-green bg-signal-green/10',
    amber: 'text-signal-amber bg-signal-amber/10',
    red: 'text-signal-red bg-signal-red/10',
  };
  return (
    <div data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`} className="rounded-2xl border border-line bg-base-800/60 p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <p className="text-ink-500 text-sm">{label}</p>
        {Icon && (
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${accentMap[accent]}`}>
            <Icon className="w-4.5 h-4.5" strokeWidth={2} />
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <p data-testid={`value-stat-${label.toLowerCase().replace(/\s+/g, '-')}`} className="font-display text-3xl text-ink-100 tabular-nums">{value}</p>
        {delta && (
          <span className={`text-xs font-medium ${deltaTone === 'up' ? 'text-signal-green' : 'text-signal-red'}`}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
