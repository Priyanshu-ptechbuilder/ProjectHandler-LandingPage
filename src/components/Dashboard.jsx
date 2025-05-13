import React from 'react';
import Sidebar from './Sidebar';
import Navbarnew from './Navbarnew';
import ProjectCard from './ProjectCard';
import PieChart from './PieChart';
import LineChart from './LineChart';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbarnew />
        <div className="dashboard-grid">
          <div className="section project-section">
            <ProjectCard />
          </div>
          <div className="section task-section">
            <PieChart />
          </div>
          <div className="section worklog-section">
            <PieChart title="Work Log" />
          </div>
          <div className="section performance-section">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
