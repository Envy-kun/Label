import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Circle } from 'lucide-react';

export default function AnalysisProgress({ steps, currentStep, log }) {
  return (
    <div data-testid="analysis-progress-panel" className="grid lg:grid-cols-[1fr_320px] gap-6">
      <div className="rounded-2xl border border-line bg-base-800/50 p-6 sm:p-8">
        <ol className="space-y-1">
          {steps.map((step, idx) => {
            const status =
              idx < currentStep ? 'done' : idx === currentStep ? 'active' : 'pending';
            return (
              <li data-testid={`analysis-step-${step.id}`} key={step.id} className="flex gap-4 py-3.5 border-b border-line/60 last:border-0">
                <div className="shrink-0 mt-0.5">
                  {status === 'done' && <CheckCircle2 className="w-5 h-5 text-signal-green" />}
                  {status === 'active' && <Loader2 className="w-5 h-5 text-signal-cyan animate-spin" />}
                  {status === 'pending' && <Circle className="w-5 h-5 text-ink-700" />}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-medium transition-colors ${
                      status === 'pending' ? 'text-ink-500' : 'text-ink-100'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-ink-500 mt-0.5">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="rounded-2xl border border-line bg-base-900 p-5 flex flex-col">
        <p className="text-xs uppercase tracking-wide text-ink-500 mb-3 font-mono">System Log</p>
        <div className="flex-1 space-y-2 font-mono text-xs overflow-y-auto max-h-[360px]">
          <AnimatePresence initial={false}>
            {log.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-2 ${
                  entry.tone === 'warning' ? 'text-signal-amber' : 'text-signal-green'
                }`}
              >
                <span aria-hidden="true" className="w-3 text-center">{entry.tone === 'warning' ? '!' : '·'}</span>
                <span className="text-ink-300">{entry.message}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {log.length === 0 && <p className="text-ink-700">Awaiting analysis output…</p>}
        </div>
      </div>
    </div>
  );
}
