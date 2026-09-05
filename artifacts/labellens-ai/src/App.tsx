import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import DashboardLayout from './components/DashboardLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ScanProduct from './pages/ScanProduct.jsx';
import Analysis from './pages/Analysis.jsx';
import ComplianceReport from './pages/ComplianceReport.jsx';
import ScanHistory from './pages/ScanHistory.jsx';
import ComplianceRules from './pages/ComplianceRules.jsx';
import Analytics from './pages/Analytics.jsx';
import Settings from './pages/Settings.jsx';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function WorkspacePage({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/dashboard">{() => <WorkspacePage><Dashboard /></WorkspacePage>}</Route>
        <Route path="/scan">{() => <WorkspacePage><ScanProduct /></WorkspacePage>}</Route>
        <Route path="/analysis">{() => <WorkspacePage><Analysis /></WorkspacePage>}</Route>
        <Route path="/report">{() => <WorkspacePage><ComplianceReport /></WorkspacePage>}</Route>
        <Route path="/history">{() => <WorkspacePage><ScanHistory /></WorkspacePage>}</Route>
        <Route path="/rules">{() => <WorkspacePage><ComplianceRules /></WorkspacePage>}</Route>
        <Route path="/analytics">{() => <WorkspacePage><Analytics /></WorkspacePage>}</Route>
        <Route path="/settings">{() => <WorkspacePage><Settings /></WorkspacePage>}</Route>
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;