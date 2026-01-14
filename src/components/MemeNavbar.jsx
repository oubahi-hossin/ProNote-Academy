import './MemeNavbar.css';

export function MemeNavbar() {
  return (
    <nav className="meme-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-wrapper">
            <div className="logo-icon">🧊</div>
            <div className="logo-text">
              <h1>FroidPredict</h1>
              <p>Predictive Maintenance</p>
            </div>
          </div>

          <div className="nav-links hidden sm:flex">
            <a href="#dashboard" className="nav-link active">
              📊 Dashboard
            </a>
            <a href="#predictions" className="nav-link">
              🔮 Predictions
            </a>
            <a href="#alerts" className="nav-link">
              🚨 Alerts
            </a>
            <a href="#diagrams" className="nav-link">
              📈 Diagrams
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <button className="notification-btn">
            🔔
            <span className="badge">3</span>
          </button>

          <div className="status-indicator">
            <span className="status-dot connected"></span>
            <span className="status-text">Connected</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
