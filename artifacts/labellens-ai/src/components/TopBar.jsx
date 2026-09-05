import { Menu, Search, Bell, ScanLine } from 'lucide-react';
import { Link } from 'wouter';

export default function TopBar({ onOpenMobile }) {
  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-3 px-4 sm:px-6 border-b border-line bg-base-900/80 glass">
      <div className="flex items-center gap-3 min-w-0">
        <button data-testid="button-open-mobile-nav" onClick={onOpenMobile} className="lg:hidden text-ink-300 hover:text-ink-100 shrink-0">
          <Menu className="w-5.5 h-5.5" />
        </button>
        <div className="hidden sm:flex items-center gap-2 bg-base-800 border border-line rounded-lg px-3 py-2 w-64 text-ink-500">
          <Search className="w-4 h-4 shrink-0" />
          <input
            data-testid="input-global-search"
            placeholder="Search products, scan IDs..."
            className="bg-transparent outline-none text-sm text-ink-100 placeholder:text-ink-500 w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <Link
          data-testid="link-topbar-scan"
          href="/scan"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-signal-cyan text-base-950 text-sm font-medium px-3.5 py-2 hover:bg-signal-cyan/90 transition-colors"
        >
          <ScanLine className="w-4 h-4" strokeWidth={2.5} />
          Scan Product
        </Link>
        <button data-testid="button-notifications" onClick={() => window.alert('No new compliance alerts')} className="relative w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-300 hover:text-ink-100 hover:bg-base-800">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-signal-red" />
        </button>
        <div className="w-9 h-9 rounded-lg bg-base-800 border border-line flex items-center justify-center text-xs font-medium text-ink-100">
          IN
        </div>
      </div>
    </header>
  );
}
