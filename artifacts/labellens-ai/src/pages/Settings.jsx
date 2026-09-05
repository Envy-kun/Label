import { Building2, Bell, ShieldCheck, PlugZap } from 'lucide-react';

const SECTIONS = [
  {
    icon: Building2,
    title: 'Organization',
    description: 'Regulatory authority profile and inspector details for this workspace.',
    fields: [
      { label: 'Authority Name', value: 'Bureau of Indian Standards — Regional Office' },
      { label: 'Inspector ID', value: 'INS-2026-0417' },
      { label: 'Jurisdiction', value: 'National Capital Region' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Thresholds',
    description: 'Score bands used to classify a scanned product.',
    fields: [
      { label: 'Compliant', value: '85 – 100' },
      { label: 'Partially Compliant', value: '60 – 84' },
      { label: 'Non-Compliant', value: '0 – 59' },
    ],
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Alerts for high-severity violations and weekly summaries.',
    fields: [
      { label: 'High-Severity Alerts', value: 'Enabled' },
      { label: 'Weekly Summary Email', value: 'Enabled' },
    ],
  },
  {
    icon: PlugZap,
    title: 'Backend Connection',
    description: 'This prototype runs on mock data. Connect a FastAPI backend to enable live scans.',
    fields: [
      { label: 'API Endpoint', value: 'Not connected' },
      { label: 'OCR Engine', value: 'Simulated (mock)' },
    ],
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Settings</h1>
        <p className="text-ink-500 text-sm mt-1.5">Workspace configuration for this prototype.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SECTIONS.map((section) => (
          <div key={section.title} className="rounded-2xl border border-line bg-base-800/50 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-signal-cyan/10 border border-signal-cyan/25 flex items-center justify-center">
                <section.icon className="w-4.5 h-4.5 text-signal-cyan" strokeWidth={1.75} />
              </div>
              <p className="text-ink-100 font-medium">{section.title}</p>
            </div>
            <p className="text-ink-500 text-xs mb-4">{section.description}</p>
            <div className="space-y-3">
              {section.fields.map((f) => (
                <div key={f.label} className="flex items-center justify-between text-sm border-t border-line/60 pt-3">
                  <span className="text-ink-500">{f.label}</span>
                  <span className="text-ink-100">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
