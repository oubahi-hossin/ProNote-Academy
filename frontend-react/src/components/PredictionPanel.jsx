import './PredictionPanel.css';

export function PredictionPanel({ prediction }) {
  const getRiskColor = (level) => {
    switch (level) {
      case 'low':
        return '#10b981';
      case 'medium':
        return '#f59e0b';
      case 'high':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="prediction-panel">
      <div className="prediction-header">
        <h4>{prediction.system}</h4>
        <span
          className="risk-badge"
          style={{ backgroundColor: getRiskColor(prediction.riskLevel) }}
        >
          {prediction.riskLevel.toUpperCase()}
        </span>
      </div>
      <div className="prediction-content">
        <p className="prediction-text">{prediction.prediction}</p>
        <div className="prediction-stats">
          <div className="stat">
            <span className="stat-label">Confidence:</span>
            <span className="stat-value">{prediction.confidence}%</span>
          </div>
          <div className="stat">
            <span className="stat-label">Remaining Life:</span>
            <span className="stat-value">{prediction.remainingLife}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
