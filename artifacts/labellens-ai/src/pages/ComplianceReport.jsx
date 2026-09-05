import { Link } from 'wouter';
import { Download, ScanLine, History, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import ComplianceScoreRing from '../components/ComplianceScoreRing.jsx';
import StatusBadge, { SeverityTag } from '../components/StatusBadge.jsx';
import ViolationCard from '../components/ViolationCard.jsx';
import { sampleReport } from '../data/mockData.js';

const REQ_ICON = {
  PASS: { icon: CheckCircle2, color: 'text-signal-green' },
  WARNING: { icon: AlertTriangle, color: 'text-signal-amber' },
  VIOLATION: { icon: XCircle, color: 'text-signal-red' },
};

export default function ComplianceReport() {
  const r = sampleReport;

  return (
    <div data-testid="report-page" className="space-y-6">
      {/* Header card */}
      <div className="rounded-2xl border border-line bg-base-800/50 p-6 sm:p-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-xs font-mono text-ink-500 mb-2">Scan ID: {r.scanId}</p>
            <h1 data-testid="text-report-product" className="font-display text-2xl sm:text-3xl text-ink-100">{r.productName}</h1>
            <p className="text-ink-500 text-sm mt-1">{r.brand} · {r.category}</p>
            <p className="text-ink-700 text-xs mt-1">Scanned {r.scanDate}</p>

            <div className="flex flex-wrap items-center gap-2 mt-5">
              <StatusBadge status={r.status} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 max-w-md">
              <div>
                <p className="text-2xl font-display text-signal-red">{r.violationsFound}</p>
                <p className="text-xs text-ink-500 mt-1">Violations</p>
              </div>
              <div>
                <p className="text-2xl font-display text-signal-amber">{r.warnings}</p>
                <p className="text-xs text-ink-500 mt-1">Warnings</p>
              </div>
              <div>
                <p className="text-2xl font-display text-signal-green">{r.requirementsPassed}</p>
                <p className="text-xs text-ink-500 mt-1">Passed</p>
              </div>
            </div>
          </div>

          <div className="justify-self-center">
            <ComplianceScoreRing score={r.score} />
          </div>
        </div>
      </div>

      {/* Extracted fields */}
      <div className="rounded-2xl border border-line bg-base-800/50 p-6 sm:p-8">
        <p className="text-ink-100 font-medium mb-1">Extracted Label Information</p>
        <p className="text-ink-500 text-xs mb-5">Fields identified by OCR and structured for compliance checks</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {r.extractedFields.map((f) => (
            <div key={f.label} className="border-b border-line/60 pb-3">
              <p className="text-ink-500 text-xs">{f.label}</p>
              <p
                 data-testid={`text-extracted-field-${f.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                 className={`text-sm mt-1 ${
                  f.value === 'Not Found' || f.value === 'Incomplete' ? 'text-signal-red' : 'text-ink-100'
                }`}
              >
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance checks table */}
      <div className="rounded-2xl border border-line bg-base-800/50 overflow-hidden">
        <div className="px-6 sm:px-8 py-5 border-b border-line">
          <p className="text-ink-100 font-medium">Compliance Checks</p>
          <p className="text-ink-500 text-xs mt-1">Each mandatory requirement evaluated against the extracted label</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-500 text-xs border-b border-line">
                <th className="px-6 sm:px-8 py-3 font-medium">Requirement</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">Extracted Value</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Severity</th>
              </tr>
            </thead>
            <tbody>
              {r.requirements.map((req) => {
                const cfg = REQ_ICON[req.status];
                const Icon = cfg.icon;
                return (
                  <tr key={req.requirement} className="border-b border-line/60 last:border-0 hover:bg-base-800/60 transition-colors">
                    <td className="px-6 sm:px-8 py-3.5 text-ink-100">{req.requirement}</td>
                    <td className="px-4 py-3.5 text-ink-300 hidden sm:table-cell">{req.extracted}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${cfg.color}`}>
                        <Icon className="w-3.5 h-3.5" /> {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <SeverityTag severity={req.severity} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Violations panel */}
      <div>
        <p className="text-ink-100 font-medium mb-1">Violations & Recommendations</p>
        <p className="text-ink-500 text-xs mb-4">Issues requiring correction before this product is fully compliant</p>
        <div className="space-y-3">
          {r.violations.map((v) => (
            <ViolationCard key={v.title} violation={v} />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button data-testid="button-download-report" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-lg bg-signal-cyan text-base-950 text-sm font-medium px-4 py-2.5 hover:bg-signal-cyan/90 transition-colors">
          <Download className="w-4 h-4" strokeWidth={2.25} />
          Download Report
        </button>
        <Link data-testid="link-scan-another" href="/scan" className="inline-flex items-center gap-2 rounded-lg border border-line text-ink-100 text-sm font-medium px-4 py-2.5 hover:bg-base-800 transition-colors">
          <ScanLine className="w-4 h-4" strokeWidth={2.25} />
          Scan Another Product
        </Link>
        <Link data-testid="link-view-history" href="/history" className="inline-flex items-center gap-2 rounded-lg border border-line text-ink-100 text-sm font-medium px-4 py-2.5 hover:bg-base-800 transition-colors">
          <History className="w-4 h-4" strokeWidth={2.25} />
          View Scan History
        </Link>
      </div>
    </div>
  );
}
