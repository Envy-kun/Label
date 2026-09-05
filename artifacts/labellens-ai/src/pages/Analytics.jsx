import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { AlertTriangle } from 'lucide-react';
import {
  complianceTrend,
  violationCategories,
  categoryVolume,
  scoreDistribution,
  highRiskManufacturers,
} from '../data/mockData.js';

const chartTooltipStyle = {
  background: '#0F1520',
  border: '1px solid #1F2B40',
  borderRadius: 10,
  color: '#EAF0F8',
  fontSize: 12,
};

const BAND_COLORS = ['#E85C5C', '#E85C5C', '#E8AA3F', '#3FD9E8', '#33C97F'];

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl border border-line bg-base-800/50 p-5 sm:p-6">
      <p className="text-ink-100 font-medium mb-1">{title}</p>
      {subtitle && <p className="text-ink-500 text-xs mb-4">{subtitle}</p>}
      <div className="h-64">{children}</div>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl text-ink-100">Analytics</h1>
        <p className="text-ink-500 text-sm mt-1.5">Trends, patterns and risk signals across every scan.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Compliance Trend Over Time" subtitle="Average score, last 7 months">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={complianceTrend} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
              <CartesianGrid stroke="#1A2236" vertical={false} />
              <XAxis dataKey="month" stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={chartTooltipStyle} />
              <Line type="monotone" dataKey="score" stroke="#3FD9E8" strokeWidth={2.5} dot={{ r: 3, fill: '#3FD9E8' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Most Common Violations" subtitle="Occurrences across all scans">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={violationCategories} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#1A2236" horizontal={false} />
              <XAxis type="number" stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="category"
                stroke="#4C5A76"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={140}
              />
              <Tooltip contentStyle={chartTooltipStyle} />
              <Bar dataKey="count" fill="#E8AA3F" radius={[0, 4, 4, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Products Scanned per Category" subtitle="Volume by commodity category">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryVolume} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
              <CartesianGrid stroke="#1A2236" vertical={false} />
              <XAxis dataKey="category" stroke="#4C5A76" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} interval={0} angle={-15} textAnchor="end" height={50} />
              <YAxis stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={chartTooltipStyle} />
              <Bar dataKey="scanned" fill="#4C7CF0" radius={[4, 4, 0, 0]} barSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Compliance Score Distribution" subtitle="Number of products per score band">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scoreDistribution} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
              <CartesianGrid stroke="#1A2236" vertical={false} />
              <XAxis dataKey="range" stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="#4C5A76" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={chartTooltipStyle} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={40}>
                {scoreDistribution.map((entry, i) => (
                  <Cell key={entry.range} fill={BAND_COLORS[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* High risk manufacturers */}
      <div className="rounded-2xl border border-line bg-base-800/50 overflow-hidden">
        <div className="px-5 sm:px-6 py-4 border-b border-line flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-signal-amber" />
          <p className="text-ink-100 font-medium">High-Risk Manufacturers</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-500 text-xs border-b border-line">
                <th className="px-5 sm:px-6 py-3 font-medium">Manufacturer</th>
                <th className="px-4 py-3 font-medium">Violations</th>
                <th className="px-4 py-3 font-medium">Avg. Score</th>
              </tr>
            </thead>
            <tbody>
              {highRiskManufacturers.map((m) => (
                <tr key={m.name} className="border-b border-line/60 last:border-0 hover:bg-base-800/60 transition-colors">
                  <td className="px-5 sm:px-6 py-3.5 text-ink-100">{m.name}</td>
                  <td className="px-4 py-3.5 text-signal-red font-medium">{m.violations}</td>
                  <td className="px-4 py-3.5 text-ink-300 tabular-nums">{m.avgScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
