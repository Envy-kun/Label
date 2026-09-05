import { Link } from 'wouter';
import {
  ScanEye,
  ScanLine,
  LayoutGrid,
  ImageIcon,
  BrainCircuit,
  FileSearch,
  ShieldCheck,
  FileBarChart2,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const WORKFLOW = [
  { icon: ImageIcon, label: 'Product Image', detail: 'Photograph or upload the packaging' },
  { icon: BrainCircuit, label: 'AI Vision & OCR', detail: 'Detects the label and reads printed text' },
  { icon: FileSearch, label: 'Information Extraction', detail: 'Structures declarations into fields' },
  { icon: ShieldCheck, label: 'Compliance Engine', detail: 'Checks fields against Legal Metrology rules' },
  { icon: FileBarChart2, label: 'Compliance Report', detail: 'Score, violations and recommendations' },
];

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered OCR',
    description: 'Extract product information automatically from packaging labels, even under variable lighting and packaging curvature.',
  },
  {
    icon: ShieldCheck,
    title: 'Intelligent Compliance Engine',
    description: 'Automatically verify mandatory declarations against Legal Metrology and FSSAI compliance rules.',
  },
  {
    icon: FileSearch,
    title: 'Instant Violation Detection',
    description: 'Identify missing, incomplete or invalid declarations the moment a label is scanned.',
  },
  {
    icon: FileBarChart2,
    title: 'Compliance Analytics',
    description: 'Monitor compliance trends, recurring violations and high-risk manufacturers over time.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-base-950">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-line bg-base-950/80 glass">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center">
              <ScanEye className="w-4.5 h-4.5 text-signal-cyan" strokeWidth={2} />
            </div>
            <span className="font-display text-sm tracking-tight">
              LabelLens <span className="text-signal-cyan">AI</span>
            </span>
          </div>
          <Link
            data-testid="link-landing-dashboard"
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-100 transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Open Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-signal-cyan/10 blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-base-800/60 px-3.5 py-1.5 text-xs text-ink-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
            Built for Smart India Hackathon 2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl leading-[1.08] tracking-tight text-ink-100"
          >
            Verify every label.
            <br />
            Ensure every product complies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-ink-300 text-base sm:text-lg max-w-xl mx-auto"
          >
            AI-powered computer vision and intelligent compliance verification for packaged commodities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              data-testid="link-landing-scan"
              href="/scan"
              className="inline-flex items-center gap-2 rounded-lg bg-signal-cyan text-base-950 font-medium px-5 py-3 hover:bg-signal-cyan/90 transition-colors shadow-glow"
            >
              <ScanLine className="w-4.5 h-4.5" strokeWidth={2.25} />
              Scan Product
            </Link>
            <Link
              data-testid="link-landing-dashboard-hero"
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg border border-line text-ink-100 font-medium px-5 py-3 hover:bg-base-800 transition-colors"
            >
              View Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink-100">How a scan becomes a verdict</h2>
          <p className="text-ink-500 mt-2 text-sm sm:text-base">Five stages, from photograph to compliance report</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-3 items-stretch">
          {WORKFLOW.map((stage, i) => (
            <div key={stage.label} className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 flex-1 rounded-2xl border border-line bg-base-800/40 p-5 w-full">
                <div className="w-11 h-11 rounded-xl bg-signal-cyan/10 border border-signal-cyan/25 flex items-center justify-center shrink-0">
                  <stage.icon className="w-5 h-5 text-signal-cyan" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-ink-100 font-medium text-sm">{stage.label}</p>
                  <p className="text-ink-500 text-xs mt-1">{stage.detail}</p>
                </div>
              </div>
              {i < WORKFLOW.length - 1 && (
                <div className="hidden sm:flex items-center justify-center py-2">
                  <ArrowRight className="w-4 h-4 text-ink-700 rotate-90 sm:rotate-0 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line bg-base-800/40 p-6 hover:border-signal-cyan/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-signal-cyan/10 border border-signal-cyan/25 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-signal-cyan" strokeWidth={1.75} />
              </div>
              <p className="text-ink-100 font-medium mb-2">{f.title}</p>
              <p className="text-ink-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-700">
          <span>LabelLens AI · Smart India Hackathon 2026 prototype</span>
          <span>Frontend-only demo · Mock data throughout</span>
        </div>
      </footer>
    </div>
  );
}
