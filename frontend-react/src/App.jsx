import './App.css';
import { SystemCard } from './components/SystemCard';
import { PredictionPanel } from './components/PredictionPanel';
import { AlertCard } from './components/AlertCard';
import { refrigerationData } from './data/staticData';

export function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🧊 FroidPredict</h1>
        <p>Refrigeration System Monitoring & Maintenance Prediction</p>
      </header>

      <main className="app-main">
        <section className="dashboard-section">
          <div className="section-grid">
            {/* Systems Column */}
            <div className="column">
              <div className="section-header">
                <h2>Active Systems</h2>
                <span className="system-count">{refrigerationData.systems.length}</span>
              </div>
              <div className="systems-list">
                {refrigerationData.systems.map((system) => (
                  <SystemCard key={system.id} system={system} />
                ))}
              </div>
            </div>

            {/* Predictions Column */}
            <div className="column">
              <div className="section-header">
                <h2>Maintenance Predictions</h2>
                <span className="system-count">{refrigerationData.predictions.length}</span>
              </div>
              <div className="predictions-list">
                {refrigerationData.predictions.map((prediction) => (
                  <PredictionPanel key={prediction.id} prediction={prediction} />
                ))}
              </div>
            </div>

            {/* Alerts Column */}
            <div className="column">
              <div className="section-header">
                <h2>Recent Alerts</h2>
                <span className="system-count">{refrigerationData.alerts.length}</span>
              </div>
              <div className="alerts-list">
                {refrigerationData.alerts.map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>ℹ️ About This Frontend</h3>
            <p>
              This React frontend displays static refrigeration system data for monitoring and
              predictive maintenance. All data is served statically without Kafka streaming.
            </p>
            <ul>
              <li>✅ Real-time system monitoring display</li>
              <li>✅ Maintenance predictions with confidence scores</li>
              <li>✅ Alert management system</li>
              <li>✅ Static data display (no streaming required)</li>
              <li>✅ Built with React + Webpack (no Vite)</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>FroidPredict &copy; 2026 | Maintenance Predictive & Thermodynamic Analysis</p>
      </footer>
    </div>
  );
}
