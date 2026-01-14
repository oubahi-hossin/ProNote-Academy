// Static refrigeration data for display
export const refrigerationData = {
  systems: [
    {
      id: 1,
      name: "System A - R22",
      status: "operational",
      temperature: 8.5,
      pressure: 12.3,
      efficiency: 87.5,
      lastUpdate: "2026-01-14T10:30:00Z"
    },
    {
      id: 2,
      name: "System B - R404A",
      status: "operational",
      temperature: -15.2,
      pressure: 18.7,
      efficiency: 91.2,
      lastUpdate: "2026-01-14T10:30:00Z"
    },
    {
      id: 3,
      name: "System C - R410A",
      status: "warning",
      temperature: 5.1,
      pressure: 22.4,
      efficiency: 78.3,
      lastUpdate: "2026-01-14T10:30:00Z"
    }
  ],
  predictions: [
    {
      id: 1,
      system: "System A",
      prediction: "Normal Operation",
      confidence: 95.5,
      remainingLife: "45 days",
      riskLevel: "low"
    },
    {
      id: 2,
      system: "System B",
      prediction: "Maintenance Required Soon",
      confidence: 87.3,
      remainingLife: "12 days",
      riskLevel: "medium"
    },
    {
      id: 3,
      system: "System C",
      prediction: "Critical - Immediate Inspection",
      confidence: 92.1,
      remainingLife: "2 days",
      riskLevel: "high"
    }
  ],
  alerts: [
    {
      id: 1,
      level: "warning",
      system: "System C",
      message: "Pressure exceeding normal range",
      timestamp: "2026-01-14T10:25:00Z"
    },
    {
      id: 2,
      level: "info",
      system: "System B",
      message: "Scheduled maintenance approaching",
      timestamp: "2026-01-14T09:45:00Z"
    },
    {
      id: 3,
      level: "success",
      system: "System A",
      message: "System operating within normal parameters",
      timestamp: "2026-01-14T10:30:00Z"
    }
  ]
};
