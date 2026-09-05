# LabelLens AI

LabelLens AI is a frontend prototype for packaged-product label compliance verification. It gives inspectors and manufacturers a focused workflow for uploading a label, watching a simulated AI analysis pipeline, reviewing the resulting compliance report, and exploring scan history, rules, analytics, and workspace settings.

## Run

```bash
pnpm --filter @workspace/labellens-ai run dev
```

The Replit-managed `artifacts/labellens-ai: web` workflow supplies the port and preview routing automatically.

## Build and typecheck

```bash
pnpm --filter @workspace/labellens-ai run typecheck
pnpm --filter @workspace/labellens-ai run build
```

## User journey

Landing → Dashboard → Scan Product → simulated AI Analysis → Compliance Report → Scan History / Analytics / Compliance Rules.

This first build is intentionally frontend-only. Mock data lives in `src/data/mockData.js`, and the simulated analysis flow is in `src/pages/Analysis.jsx`. Those are the seams for connecting a future compliance-analysis API.