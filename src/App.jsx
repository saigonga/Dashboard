import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import CalendarPage from './pages/Calendar/Calendar';
import UserData from './pages/User-data/UserData';
import Tasks from './pages/KanbanBoard/Tasks';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/calendar" element={<CalendarPage/>} />
            <Route path="/activitystatus" element={<UserData/>} />
            <Route path="/tasks" element={<Tasks/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
