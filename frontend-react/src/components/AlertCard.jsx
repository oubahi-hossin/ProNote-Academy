import './AlertCard.css';

export function AlertCard({ alert }) {
  const getAlertIcon = (level) => {
    switch (level) {
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'success':
        return '✅';
      case 'info':
        return 'ℹ️';
      default:
        return '📌';
    }
  };

  const getAlertColor = (level) => {
    switch (level) {
      case 'warning':
        return '#f59e0b';
      case 'error':
        return '#ef4444';
      case 'success':
        return '#10b981';
      case 'info':
        return '#3b82f6';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="alert-card" style={{ borderLeftColor: getAlertColor(alert.level) }}>
      <div className="alert-icon">{getAlertIcon(alert.level)}</div>
      <div className="alert-content">
        <div className="alert-system">{alert.system}</div>
        <div className="alert-message">{alert.message}</div>
        <div className="alert-time">{new Date(alert.timestamp).toLocaleString()}</div>
      </div>
    </div>
  );
}
