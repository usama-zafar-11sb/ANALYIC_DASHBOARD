
import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import KPICards from './components/KPICards';
import FilterSection from './components/FilterSection';
import ChartSection from './components/ChartSection';
import DataTable from './components/DataTable';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference on initial load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [filters, setFilters] = useState({
    timeframe: 'Last 30 days',
    industry: 'All Industries',
    region: 'All Regions'
  });

  useEffect(() => {
    // Apply dark mode class to html element
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar 
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <FilterSection filters={filters} setFilters={setFilters} />
            <KPICards filters={filters} />
            <ChartSection filters={filters} />
            <DataTable filters={filters} />
          </div>
        </main>
      </div>
    </div>
  );
}
