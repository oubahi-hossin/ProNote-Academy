# React Frontend - FroidPredict

This is a **React-based frontend** for the FroidPredict refrigeration monitoring system. It displays static data without relying on Kafka streaming.

## Features

- ✅ **React 18** - Modern React components
- ✅ **Webpack** - (No Vite) - Custom bundler configuration
- ✅ **Static Data Display** - All data served statically
- ✅ **No Kafka Dependency** - Pure static data presentation
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **Real-time UI** - Component-based architecture for easy updates

## Structure

```
frontend-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── SystemCard.jsx  # System status cards
│   │   ├── PredictionPanel.jsx # Maintenance predictions
│   │   └── AlertCard.jsx   # Alert notifications
│   ├── data/
│   │   └── staticData.js   # Static refrigeration data
│   ├── App.jsx             # Main app component
│   ├── index.jsx           # React entry point
│   └── style.css           # Global styles
├── package.json
├── webpack.config.js       # Webpack configuration
└── .babelrc               # Babel configuration
```

## Installation

```bash
cd frontend-react
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

The compiled files will be in the `dist/` folder.

## Static Data

All data is defined in `src/data/staticData.js` and includes:
- **Systems**: Active refrigeration systems with temperature, pressure, and efficiency
- **Predictions**: Maintenance predictions with confidence scores
- **Alerts**: System alerts and notifications

## Components

### SystemCard
Displays individual refrigeration system status with metrics.

### PredictionPanel
Shows maintenance predictions with risk levels and remaining life.

### AlertCard
Displays alert notifications with severity levels.

## Notes

- This frontend is **independent** of the Vue frontend in the main `frontend/` folder
- Both frontends can run simultaneously
- Webpack is configured for hot-reload during development
- Static data can be easily replaced with API calls when needed
