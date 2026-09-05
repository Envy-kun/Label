import { Link, useLocation } from 'wouter';
import {
  LayoutGrid,
  ScanLine,
  History,
  ShieldCheck,
  BarChart3,
  Settings as SettingsIcon,
  ScanEye,
  X,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { to: '/scan', label: 'Scan Product', icon: ScanLine },
  { to: '/history', label: 'Scan History', icon: History },
  { to: '/rules', label: 'Compliance Rules', icon: ShieldCheck },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }) {
  const [location] = useLocation();
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
         className={`fixed lg:sticky top-0 left-0 h-[100dvh] z-50 lg:z-0 flex flex-col
          bg-base-900 border-r border-line transition-all duration-200 ease-out
          ${collapsed ? 'lg:w-[76px]' : 'lg:w-[248px]'}
          w-[264px] ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-line shrink-0">
          <div className={`flex items-center gap-2.5 overflow-hidden ${collapsed ? 'lg:justify-center lg:w-full' : ''}`}>
            <div className="w-8 h-8 rounded-lg bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center shrink-0">
              <ScanEye className="w-4.5 h-4.5 text-signal-cyan" strokeWidth={2} />
            </div>
            <span className={`font-display text-sm text-ink-100 tracking-tight whitespace-nowrap ${collapsed ? 'lg:hidden' : ''}`}>
              LabelLens <span className="text-signal-cyan">AI</span>
            </span>
          </div>
          <button data-testid="button-close-mobile-nav" onClick={onCloseMobile} className="lg:hidden text-ink-500 hover:text-ink-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              key={item.to}
              href={item.to}
              onClick={onCloseMobile}
              className={
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors
                ${collapsed ? 'lg:justify-center' : ''}
                ${location === item.to
                  ? 'bg-signal-cyan/10 text-signal-cyan border border-signal-cyan/25'
                   : 'text-ink-300 border border-transparent hover:bg-base-800 hover:text-ink-100'}`
              }
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4.5 h-4.5 shrink-0" strokeWidth={2} />
              <span className={`whitespace-nowrap ${collapsed ? 'lg:hidden' : ''}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex border-t border-line p-3">
          <button
            data-testid="button-toggle-sidebar"
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center gap-2 rounded-lg py-2 text-ink-500 hover:text-ink-100 hover:bg-base-800 text-xs transition-colors"
          >
            {collapsed ? <ChevronsRight className="w-4 h-4" /> : <><ChevronsLeft className="w-4 h-4" /> Collapse</>}
          </button>
        </div>
      </aside>
    </>
  );
}
