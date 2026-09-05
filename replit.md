# LabelLens AI

LabelLens AI helps inspectors and manufacturers verify packaged-product labels against mandatory compliance requirements.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/labellens-ai run dev` — run the LabelLens AI web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/labellens-ai/src/pages/` — LabelLens landing, dashboard, scan, analysis, report, history, rules, analytics, and settings screens
- `artifacts/labellens-ai/src/components/` — shared shell, upload, progress, score, status, and violation components
- `artifacts/labellens-ai/src/data/mockData.js` — local prototype data and simulated compliance results
- `artifacts/labellens-ai/src/index.css` — product theme, responsive layout, and visual tokens
- `artifacts/labellens-ai/.replit-artifact/artifact.toml` — managed web artifact and workflow configuration

## Architecture decisions

- The current build is a frontend-only prototype with realistic local mock data and a simulated analysis pipeline.
- The web app is the root artifact so the preview and published site open directly to LabelLens.
- The scan journey persists the latest scan metadata locally so report and history views remain useful after navigation or refresh.
- The app uses wouter for workspace-compatible client-side routing and serves through the managed artifact workflow.

## Product

LabelLens provides a public introduction, compliance dashboard, product-label upload flow, staged AI analysis animation, compliance report, scan history, rules reference, analytics, and workspace settings. The prototype uses simulated analysis results and is structured for a future API-backed implementation.

## User preferences

No additional preferences recorded.

## Gotchas

- Use the managed `artifacts/labellens-ai: web` workflow rather than starting Vite from the workspace root.
- The scan/report behavior is intentionally simulated until a real analysis service is connected.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
