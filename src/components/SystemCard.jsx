import './SystemCard.css';

export function SystemCard({ system }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return '#10b981';
      case 'warning':
        return '#f59e0b';
      case 'error':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="system-card">
      <div className="card-header">
        <h3>{system.name}</h3>
        <span
          className="status-badge"
          style={{ backgroundColor: getStatusColor(system.status) }}
        >
          {system.status.toUpperCase()}
        </span>
      </div>
      <div className="card-body">
        <div className="metric">
          <span className="label">Temperature:</span>
          <span className="value">{system.temperature}°C</span>
        </div>
        <div className="metric">
          <span className="label">Pressure:</span>
          <span className="value">{system.pressure} bar</span>
        </div>
        <div className="metric">
          <span className="label">Efficiency:</span>
          <span className="value">{system.efficiency}%</span>
        </div>
      </div>
      <div className="card-footer">
        <small>Last updated: {new Date(system.lastUpdate).toLocaleString()}</small>
      </div>
    </div>
  );
}
