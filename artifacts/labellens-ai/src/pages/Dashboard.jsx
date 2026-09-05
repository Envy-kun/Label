import { Link } from 'wouter';
import { ScanLine, PackageCheck, PackageSearch, AlertTriangle, Gauge, ArrowUpRight } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import StatCard from '../components/StatCard.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { summaryStats, complianceTrend, complianceBreakdown, recentScans } from '../data/mockData.js';

const chartTooltipStyle = {
  background: '#0F1520',
  border: '1px solid #1F2B40',
  borderRadius: 10,
  color: '#EAF0F8',
  fontSize: 12,
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Compliance Overview</h1>
          <p className="text-ink-500 text-sm mt-1.5">
            Monitor packaged commodity compliance across all scanned products.
          </p>
        </div>
        <Link
          href="/scan"
          className="inline-flex items-center gap-2 rounded-lg bg-signal-cyan text-base-950 text-sm font-medium px-4 py-2.5 hover:bg-signal-cyan/90 transition-colors w-fit"
        >
          <ScanLine className="w-4 h-4" strokeWidth={2.5} />
          Scan Product
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Products Scanned" value={summaryStats.productsScanned.toLocaleString()} delta="+8.2% this month" icon={PackageSearch} accent="cyan" />
        <StatCard label="Compliant Products" value={summaryStats.compliantProducts.toLocaleString()} delta="+4.1% this month" icon={PackageCheck} accent="green" />
        <StatCard label="Violations Detected" value={summaryStats.violationsDetected.toLocaleString()} delta="-2.3% this month" deltaTone="down" icon={AlertTriangle} accent="amber" />
        <StatCard label="Avg. Compliance Score" value={`${summaryStats.avgComplianceScore}%`} delta="+2 pts this month" icon={Gauge} accent="cyan" />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-line bg-base-800/50 p-5 sm:p-6">
          <div className="flex items-center justify-between mb-1">
            <p className="text-ink-100 font-medium">Compliance Trend</p>
            <span className="text-xs text-ink-500">Last 7 months</span>
          </div>
          <p className="text-ink-500 text-xs mb-4">Average compliance score across all scanned categories</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={complianceTrend} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3FD9E8" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#3FD9E8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1A2236" vertical={false} />
                <XAxis dataKey="month" stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[60, 100]} stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Area type="monotone" dataKey="score" stroke="#3FD9E8" strokeWidth={2} fill="url(#scoreFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-base-800/50 p-5 sm:p-6">
          <p className="text-ink-100 font-medium mb-1">Compliance Split</p>
          <p className="text-ink-500 text-xs mb-2">Across {summaryStats.productsScanned.toLocaleString()} scans</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={complianceBreakdown}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {complianceBreakdown.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={chartTooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-1">
            {complianceBreakdown.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
                  <span className="text-ink-300">{entry.name}</span>
                </div>
                <span className="text-ink-100 font-medium">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent scans table */}
      <div className="rounded-2xl border border-line bg-base-800/50 overflow-hidden">
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-line">
          <p className="text-ink-100 font-medium">Recent Scans</p>
          <Link href="/history" className="text-xs text-signal-cyan hover:underline inline-flex items-center gap-1">
            View all <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-500 text-xs border-b border-line">
                <th className="px-5 sm:px-6 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">Scan Date</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentScans.slice(0, 5).map((scan) => (
                <tr key={scan.id} className="border-b border-line/60 last:border-0 hover:bg-base-800/60 transition-colors">
                  <td className="px-5 sm:px-6 py-3.5">
                    <p className="text-ink-100 font-medium">{scan.product}</p>
                    <p className="text-ink-500 text-xs">{scan.brand}</p>
                  </td>
                  <td className="px-4 py-3.5 text-ink-300 hidden sm:table-cell">{scan.date}</td>
                  <td className="px-4 py-3.5 text-ink-100 font-medium tabular-nums">{scan.score}</td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={scan.status} size="sm" />
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href="/report" className="text-signal-cyan text-xs font-medium hover:underline">
                      View Report
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
