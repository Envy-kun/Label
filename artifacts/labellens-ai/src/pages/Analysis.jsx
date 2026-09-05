import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ScanEye } from 'lucide-react';
import AnalysisProgress from '../components/AnalysisProgress.jsx';
import { analysisSteps, analysisLog } from '../data/mockData.js';

const STEP_DURATION_MS = 950;

export default function Analysis() {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (currentStep >= analysisSteps.length) {
      const finalTimer = setTimeout(() => navigate('/report'), 700);
      return () => clearTimeout(finalTimer);
    }

    const timer = setTimeout(() => {
      const entriesForStep = analysisLog.filter((l) => l.step === currentStep + 1);
      if (entriesForStep.length) {
        setLog((prev) => [...prev, ...entriesForStep]);
      }
      setCurrentStep((s) => s + 1);
    }, STEP_DURATION_MS);

    return () => clearTimeout(timer);
  }, [currentStep, navigate]);

  const progressPct = Math.min((currentStep / analysisSteps.length) * 100, 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-signal-cyan/10 border border-signal-cyan/25 mb-5 animate-pulseRing">
          <ScanEye className="w-9 h-9 text-signal-cyan" strokeWidth={1.5} />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="w-full h-8 bg-gradient-to-b from-transparent via-signal-cyan/25 to-transparent animate-scanline" />
          </div>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Analyzing Product Label</h1>
        <p className="text-ink-500 text-sm mt-1.5">
          LabelLens AI is verifying the label against Legal Metrology compliance rules.
        </p>
      </div>

      <div className="rounded-full h-1.5 bg-base-800 overflow-hidden">
        <div
          className="h-full bg-signal-cyan transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <AnalysisProgress steps={analysisSteps} currentStep={currentStep} log={log} />
    </div>
  );
}
