import './Sidebar.css';

export function Sidebar({ 
  activePage, 
  onNavigate, 
  alertCount, 
  predictionCount, 
  isRefreshing, 
  onRefresh, 
  realtimeConnected,
  isOpen,
  onClose 
}) {
  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-gauge-high' },
    { id: 'diagrams', label: 'Analytics', icon: 'fa-solid fa-chart-line' },
    { id: 'alerts', label: 'Alerts', icon: 'fa-solid fa-triangle-exclamation', badge: alertCount },
    { id: 'reports', label: 'Reports', icon: 'fa-solid fa-file-alt' },
    { id: 'predictions', label: 'Predictions', icon: 'fa-solid fa-wand-magic-sparkles', badge: predictionCount },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} 
        onClick={onClose}
      ></div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo Section */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <i className="fa-solid fa-snowflake"></i>
            </div>
            <div className="logo-info">
              <h1>FroidPredict</h1>
              <p>Analytics Platform</p>
            </div>
            <button 
              className={`refresh-button ${isRefreshing ? 'spinning' : ''}`}
              onClick={onRefresh}
              disabled={isRefreshing}
              title="Refresh data"
            >
              <i className="fa-solid fa-sync-alt"></i>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <div className="nav-items">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <i className={`nav-icon ${item.icon}`}></i>
                <span className="nav-label">{item.label}</span>
                {item.badge > 0 && (
                  <span className={`nav-badge ${item.id === 'alerts' ? 'badge-red' : 'badge-blue'}`}>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <a href="#guide" className="nav-item">
              <i className="nav-icon fa-solid fa-book"></i>
              <span className="nav-label">Guide</span>
            </a>
          </div>

          {/* System Status Section */}
          <div className="sidebar-section">
            <div className="section-header">
              <h3>System Status</h3>
              <div className="status-indicator">
                <span className={`status-dot ${realtimeConnected ? 'connected' : 'polling'}`}></span>
                <span className={`status-label ${realtimeConnected ? 'connected' : 'polling'}`}>
                  {realtimeConnected ? 'Live' : 'Polling'}
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <div className="stat-info">
                  <span className="stat-label">
                    <i className="fa-solid fa-heart-pulse stat-icon-sm"></i>
                    System Health
                  </span>
                  <span className="stat-value good">98.5%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill good" style={{ width: '98.5%' }}></div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-info">
                  <span className="stat-label">
                    <i className="fa-solid fa-bolt stat-icon-sm"></i>
                    API Response
                  </span>
                  <span className="stat-value good">45ms</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill good" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-info">
                  <span className="stat-label">
                    <i className="fa-solid fa-satellite-dish stat-icon-sm"></i>
                    Active Sensors
                  </span>
                  <span className="stat-value">12/12</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill good" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* User Section */}
          <div className="sidebar-footer">
            <div className="user-card">
              <div className="user-avatar">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">System Administrator</span>
              </div>
              <button className="settings-btn" title="Settings">
                <i className="fa-solid fa-cog"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
