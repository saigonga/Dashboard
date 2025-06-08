import React, { useState } from 'react';
import './Dashboard.css'
import Calendar from '../../components/Calendar/Calendar';
import KanbanBoard from '../../components/KanbanBoard/KanbanBoard';

import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CalendarIcon,
  TicketIcon,
  CubeTransparentIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

function Dashboard() {
  const [selectedDateRange, setSelectedDateRange] = useState('Last 7 days');

  const handleDateRangeChange = (event) => {
    setSelectedDateRange(event.target.value);
    // In a real application, you would fetch new data based on this date range
    console.log('Date range selected:', event.target.value);
  };

  // Dummy data that will change based on selectedDateRange for demonstration
  const getStatsData = (dateRange) => {
    switch (dateRange) {
      case 'Last 7 days':
        return {
          totalUsers: '1,234', userChange: '+12%', userChangeType: 'positive',
          revenue: '$12,345', revenueChange: '+8%', revenueChangeType: 'positive',
          activeProjects: '15', projectsChange: '-2%', projectsChangeType: 'negative',
          tasksCompleted: '89', tasksChange: '+23%', tasksChangeType: 'positive',
          supportTickets: '42', ticketsChange: '-5%', ticketsChangeType: 'negative',
          pendingOrders: '7', ordersChange: '+1', ordersChangeType: 'positive',
          websiteTraffic: '5,432', trafficChange: '+15%', trafficChangeType: 'positive',
        };
      case 'Last 30 days':
        return {
          totalUsers: '4,567', userChange: '+5%', userChangeType: 'positive',
          revenue: '$45,678', revenueChange: '+3%', revenueChangeType: 'positive',
          activeProjects: '18', projectsChange: '+5%', projectsChangeType: 'positive',
          tasksCompleted: '320', tasksChange: '+10%', tasksChangeType: 'positive',
          supportTickets: '150', ticketsChange: '+20%', ticketsChangeType: 'positive',
          pendingOrders: '25', ordersChange: '+10', ordersChangeType: 'positive',
          websiteTraffic: '20,123', trafficChange: '+8%', trafficChangeType: 'positive',
        };
      case 'Last 3 months':
        return {
          totalUsers: '10,987', userChange: '+20%', userChangeType: 'positive',
          revenue: '$100,234', revenueChange: '+15%', revenueChangeType: 'positive',
          activeProjects: '25', projectsChange: '+10%', projectsChangeType: 'positive',
          tasksCompleted: '780', tasksChange: '+30%', tasksChangeType: 'positive',
          supportTickets: '500', ticketsChange: '+50%', ticketsChangeType: 'positive',
          pendingOrders: '80', ordersChange: '+50', ordersChangeType: 'positive',
          websiteTraffic: '50,456', trafficChange: '+25%', trafficChangeType: 'positive',
        };
      default:
        return {};
    }
  };

  const stats = getStatsData(selectedDateRange);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <div className="date-filter">
          <select 
            className="data-select"
            value={selectedDateRange}
            onChange={handleDateRangeChange}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-icon">
            <UsersIcon />
          </div>
          <div className="stats-info">
            <h3>Total Users</h3>
            <p className="stats-number">{stats.totalUsers}</p>
            <p className={`stats-change ${stats.userChangeType}`}>{stats.userChange} from last month</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <CurrencyDollarIcon />
          </div>
          <div className="stats-info">
            <h3>Revenue</h3>
            <p className="stats-number">{stats.revenue}</p>
            <p className={`stats-change ${stats.revenueChangeType}`}>{stats.revenueChange} from last month</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <ChartBarIcon />
          </div>
          <div className="stats-info">
            <h3>Active Projects</h3>
            <p className="stats-number">{stats.activeProjects}</p>
            <p className={`stats-change ${stats.projectsChangeType}`}>{stats.projectsChange} from last month</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <CalendarIcon />
          </div>
          <div className="stats-info">
            <h3>Tasks Completed</h3>
            <p className="stats-number">{stats.tasksCompleted}</p>
            <p className={`stats-change ${stats.tasksChangeType}`}>{stats.tasksChange} from last month</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <TicketIcon />
          </div>
          <div className="stats-info">
            <h3>Support Tickets</h3>
            <p className="stats-number">{stats.supportTickets}</p>
            <p className={`stats-change ${stats.ticketsChangeType}`}>{stats.ticketsChange} from last week</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <CubeTransparentIcon />
          </div>
          <div className="stats-info">
            <h3>Pending Orders</h3>
            <p className="stats-number">{stats.pendingOrders}</p>
            <p className={`stats-change ${stats.ordersChangeType}`}>{stats.ordersChange} from yesterday</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">
            <GlobeAltIcon />
          </div>
          <div className="stats-info">
            <h3>Website Traffic</h3>
            <p className="stats-number">{stats.websiteTraffic}</p>
            <p className={`stats-change ${stats.trafficChangeType}`}>{stats.trafficChange} from last month</p>
          </div>
        </div>

      </div>

      {/* Removed dashboard-extra-sections div */}
      {/*
      <div className="dashboard-extra-sections">
        <div className="section-card">
          <h2>Upcoming Events</h2>
          <Calendar />
        </div>
        <div className="section-card">
          <h2>Task Summary</h2>
          <KanbanBoard />
        </div>
      </div>
      */}
    </div>
  );
}

export default Dashboard;