import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import './Charts.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Define chartOptions before using it
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for the line chart
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: '#0066ff',
        backgroundColor: 'rgba(0, 102, 255, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const userBarChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#00c853',
      },
    ],
  };

  // Sample data for the Pie chart (Device Distribution)
  const pieChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#4a90e2', '#50c878', '#ff6b6b'],
      },
    ],
  };

  // Sample data for another Bar chart (Weekly Sales)
  const salesBarChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1500, 1300, 1800],
        backgroundColor: '#ff9800',
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3>Revenue Overview</h3>
        <Line data={lineChartData} options={chartOptions} />
      </div>
      <div className="chart-card">
        <h3>Weekly Users</h3>
        <Bar data={userBarChartData} options={chartOptions} />
      </div>
      <div className="chart-card">
        <h3>Device Distribution</h3>
        <Pie data={pieChartData} options={chartOptions} />
      </div>
      <div className="chart-card">
        <h3>Weekly Sales</h3>
        <Bar data={salesBarChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Charts; 