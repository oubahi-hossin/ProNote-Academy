import './MemeBanner.css';

export function MemeBanner({ loading, onRefresh }) {
  return (
    <div className="meme-banner">
      <div className="banner-container">
        <div className="banner-content">
          <h2>🚀 Welcome to FroidPredict Dashboard</h2>
          <p>Real-time refrigeration system monitoring and predictive maintenance analytics</p>
        </div>

        <div className="banner-actions">
          <button 
            className={`refresh-btn ${loading ? 'loading' : ''}`}
            onClick={onRefresh}
            disabled={loading}
          >
            <span className={loading ? 'spinner' : '🔄'}>
              {loading ? '⏳' : '🔄'}
            </span>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>
    </div>
  );
}
