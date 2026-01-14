import { useState } from 'react';
import { Layout } from './components/Layout';
import { MemeCard } from './components/MemeCard';
import { AlertCard } from './components/AlertCard';
import { refrigerationData } from './data/staticData';

export function App() {
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [stats] = useState({
    total_predictions: 247,
    total_alerts: 12,
    mongodb_connected: true,
    uptime: 99.8
  });

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  return (
    <Layout
      activePage={activePage}
      onNavigate={handleNavigate}
      loading={loading}
      stats={stats}
      onRefresh={handleRefresh}
      isRealTimeConnected={stats.mongodb_connected}
      alertCount={refrigerationData.alerts.length}
      predictionCount={refrigerationData.predictions.length}
    >
 
    </Layout>
  );
}
