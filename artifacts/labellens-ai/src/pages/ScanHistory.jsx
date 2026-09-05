import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { Search, SlidersHorizontal } from 'lucide-react';
import StatusBadge from '../components/StatusBadge.jsx';
import { recentScans } from '../data/mockData.js';

const STATUS_OPTIONS = ['All Statuses', 'Compliant', 'Partially Compliant', 'Non-Compliant'];
const SEVERITY_OPTIONS = ['All Severities', 'No Violations', '1-2 Violations', '3+ Violations'];
const DATE_OPTIONS = ['All Time', 'Last 7 Days', 'Last 30 Days'];

function matchesSeverity(count, filter) {
  if (filter === 'All Severities') return true;
  if (filter === 'No Violations') return count === 0;
  if (filter === '1-2 Violations') return count >= 1 && count <= 2;
  if (filter === '3+ Violations') return count >= 3;
  return true;
}

function matchesDate(dateStr, filter) {
  if (filter === 'All Time') return true;
  const days = filter === 'Last 7 Days' ? 7 : 30;
  const scanDate = new Date(dateStr);
  const latest = new Date('2026-09-05');
  const diff = (latest - scanDate) / (1000 * 60 * 60 * 24);
  return diff <= days;
}

export default function ScanHistory() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All Statuses');
  const [severity, setSeverity] = useState('All Severities');
  const [dateFilter, setDateFilter] = useState('All Time');

  const filtered = useMemo(() => {
    return recentScans.filter((scan) => {
      const matchesQuery =
        scan.product.toLowerCase().includes(query.toLowerCase()) ||
        scan.brand.toLowerCase().includes(query.toLowerCase()) ||
        scan.id.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'All Statuses' || scan.status === status;
      return matchesQuery && matchesStatus && matchesSeverity(scan.violations, severity) && matchesDate(scan.date, dateFilter);
    });
  }, [query, status, severity, dateFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Scan History</h1>
        <p className="text-ink-500 text-sm mt-1.5">Search and filter through previously scanned products.</p>
      </div>

      <div className="rounded-2xl border border-line bg-base-800/50 p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2 bg-base-950 border border-line rounded-lg px-3 py-2.5">
          <Search className="w-4 h-4 text-ink-500 shrink-0" />
          <input
            data-testid="input-history-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product, brand or scan ID..."
            className="bg-transparent outline-none text-sm text-ink-100 placeholder:text-ink-500 w-full"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-ink-500 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filters:
          </div>
          <FilterSelect value={dateFilter} onChange={setDateFilter} options={DATE_OPTIONS} />
          <FilterSelect value={status} onChange={setStatus} options={STATUS_OPTIONS} />
          <FilterSelect value={severity} onChange={setSeverity} options={SEVERITY_OPTIONS} />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-base-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-500 text-xs border-b border-line">
                <th className="px-5 sm:px-6 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium hidden md:table-cell">Brand</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">Date</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">Violations</th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((scan) => (
                <tr key={scan.id} className="border-b border-line/60 last:border-0 hover:bg-base-800/60 transition-colors">
                  <td className="px-5 sm:px-6 py-3.5">
                    <p className="text-ink-100 font-medium">{scan.product}</p>
                    <p className="text-ink-500 text-xs font-mono">{scan.id}</p>
                  </td>
                  <td className="px-4 py-3.5 text-ink-300 hidden md:table-cell">{scan.brand}</td>
                  <td className="px-4 py-3.5 text-ink-300 hidden sm:table-cell">{scan.date}</td>
                  <td className="px-4 py-3.5 text-ink-100 font-medium tabular-nums">{scan.score}</td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={scan.status} size="sm" />
                  </td>
                  <td className="px-4 py-3.5 text-ink-300 hidden sm:table-cell">{scan.violations}</td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href="/report" className="text-signal-cyan text-xs font-medium hover:underline">
                      View Report
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-ink-500 text-sm">
                    No scans match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ value, onChange, options }) {
  return (
    <select
      data-testid={`select-filter-${options[0].toLowerCase().replace(/\s+/g, '-')}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-base-950 border border-line rounded-lg text-xs text-ink-100 px-3 py-2 outline-none focus:border-signal-cyan/50"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
