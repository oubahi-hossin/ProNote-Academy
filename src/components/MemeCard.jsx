import './MemeCard.css';

export function MemeCard({ system }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'operational';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'unknown';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return 'fa-circle-check';
      case 'warning':
        return 'fa-triangle-exclamation';
      case 'error':
        return 'fa-circle-xmark';
      default:
        return 'fa-circle-question';
    }
  };

  return (
    <div className={`meme-card status-${getStatusColor(system.status)}`}>
      <div className="card-header">
        <div className="system-title">
          <i className="fa-solid fa-snowflake system-icon"></i>
          <h4 className="system-name">{system.name}</h4>
        </div>
        <span className={`status-badge ${system.status}`}>
          <i className={`fa-solid ${getStatusIcon(system.status)}`}></i>
          {system.status.toUpperCase()}
        </span>
      </div>

      <div className="card-metrics">
        <div className="metric">
          <span className="metric-icon">
            <i className="fa-solid fa-temperature-half"></i>
          </span>
          <div className="metric-content">
            <span className="metric-label">Temperature</span>
            <span className="metric-value">{system.temperature}°C</span>
          </div>
        </div>

        <div className="metric">
          <span className="metric-icon">
            <i className="fa-solid fa-gauge-high"></i>
          </span>
          <div className="metric-content">
            <span className="metric-label">Pressure</span>
            <span className="metric-value">{system.pressure} bar</span>
          </div>
        </div>

        <div className="metric">
          <span className="metric-icon">
            <i className="fa-solid fa-bolt"></i>
          </span>
          <div className="metric-content">
            <span className="metric-label">Efficiency</span>
            <span className="metric-value">{system.efficiency}%</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <i className="fa-regular fa-clock"></i>
        <small>Last updated: {new Date(system.lastUpdate).toLocaleString()}</small>
      </div>
    </div>
  );
}
