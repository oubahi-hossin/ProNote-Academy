import './Layout.css';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

export function Layout({ 
  children, 
  activePage, 
  onNavigate, 
  loading, 
  stats, 
  onRefresh, 
  isRealTimeConnected,
  alertCount,
  predictionCount
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = () => {
    const titles = {
      'dashboard': 'Dashboard Overview',
      'predictions': 'Prediction Analytics',
      'alerts': 'System Alerts',
      'diagrams': 'Enthalpy Diagrams',
      'reports': 'Reports',
    };
    return titles[activePage] || 'Dashboard';
  };

  const getPageIcon = () => {
    const icons = {
      'dashboard': 'fa-solid fa-gauge-high',
      'predictions': 'fa-solid fa-wand-magic-sparkles',
      'alerts': 'fa-solid fa-triangle-exclamation',
      'diagrams': 'fa-solid fa-chart-line',
      'reports': 'fa-solid fa-file-alt',
    };
    return icons[activePage] || 'fa-solid fa-gauge-high';
  };

  return (
    <div className="layout">
      <Sidebar 
        activePage={activePage}
        onNavigate={onNavigate}
        alertCount={alertCount}
        predictionCount={predictionCount}
        isRefreshing={loading}
        onRefresh={onRefresh}
        realtimeConnected={isRealTimeConnected}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Top Header Bar */}
      <div className="top-header">
        <div className="header-container">
          <div className="header-left">
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="page-title-wrapper">
              <i className={`page-icon ${getPageIcon()}`}></i>
              <h1 className="page-title">{getPageTitle()}</h1>
            </div>

            {loading && (
              <div className="loading-indicator">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>Loading...</span>
              </div>
            )}
          </div>

          <div className="header-right">
            {/* Search Button */}
            <button className="header-btn search-btn" title="Search">
              <i className="fa-solid fa-search"></i>
            </button>

            {/* Notifications */}
            <button className="header-btn notification-btn" title="Notifications">
              <i className="fa-solid fa-bell"></i>
              {stats.total_alerts > 0 && (
                <span className="notification-badge">{stats.total_alerts}</span>
              )}
            </button>

            {/* Real-time Status */}
            <div className={`status-pill ${isRealTimeConnected ? 'connected' : 'offline'}`}>
              <span className="status-dot"></span>
              <span className="status-text">{isRealTimeConnected ? 'Live' : 'Offline'}</span>
            </div>

            {/* Refresh Button */}
            <button 
              className={`header-btn refresh-header-btn ${loading ? 'spinning' : ''}`} 
              onClick={onRefresh}
              title="Refresh"
            >
              <i className="fa-solid fa-sync-alt"></i>
            </button>

            {/* User Menu */}
            <button className="header-btn user-menu-btn" title="User menu">
              <i className="fa-solid fa-user-circle"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Page Content */}
        <main className="page-content">
          <div className="content-container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
