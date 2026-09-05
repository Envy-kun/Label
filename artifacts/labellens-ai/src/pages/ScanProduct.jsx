import { useState } from 'react';
import { useLocation } from 'wouter';
import { ScanSearch, Info } from 'lucide-react';
import UploadArea from '../components/UploadArea.jsx';

export default function ScanProduct() {
  const [file, setFile] = useState(null);
  const [, navigate] = useLocation();

  const handleAnalyze = () => {
    if (!file) return;
    localStorage.setItem('labellens:lastScan', JSON.stringify({ fileName: file.name, capturedAt: new Date().toISOString() }));
    navigate('/analysis');
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Scan Product Label</h1>
        <p className="text-ink-500 text-sm mt-1.5">
          Upload a packaged product image to automatically verify label compliance.
        </p>
      </div>

      <UploadArea onFileSelected={(f) => setFile(f)} />

      <div className="rounded-xl border border-line bg-base-800/40 px-4 py-3.5 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-signal-cyan shrink-0 mt-0.5" />
        <p className="text-xs text-ink-500 leading-relaxed">
          For best results, capture the full principal display panel in good lighting, with the label flat
          and legible. LabelLens AI works well from a phone camera in the field.
        </p>
      </div>

      <button
        data-testid="button-analyze-label"
        onClick={handleAnalyze}
        disabled={!file}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-signal-cyan text-base-950 font-medium px-6 py-3.5 hover:bg-signal-cyan/90 disabled:bg-base-700 disabled:text-ink-700 disabled:cursor-not-allowed transition-colors"
      >
        <ScanSearch className="w-4.5 h-4.5" strokeWidth={2.25} />
        Analyze Product Label
      </button>
    </div>
  );
}
