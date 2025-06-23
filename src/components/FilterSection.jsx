import React from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function FilterSection({ filters, setFilters }) {
  const timeframeOptions = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last year'];
  const industryOptions = ['All Industries', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Education'];
  const regionOptions = ['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa'];

  const clearAllFilters = () => {
    setFilters({
      timeframe: 'Last 30 days',
      industry: 'All Industries', 
      region: 'All Regions'
    });
  };

  const handleTimeframeChange = (value) => {
    setFilters(prev => ({ ...prev, timeframe: value }));
  };

  const handleIndustryChange = (value) => {
    setFilters(prev => ({ ...prev, industry: value }));
  };

  const handleRegionChange = (value) => {
    setFilters(prev => ({ ...prev, region: value }));
  };

  const FilterDropdown = ({ label, value, options, onChange }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white pr-10"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <FilterDropdown
            label="Timeframe"
            value={filters.timeframe}
            options={timeframeOptions}
            onChange={handleTimeframeChange}
          />
          <FilterDropdown
            label="Industry"
            value={filters.industry}
            options={industryOptions}
            onChange={handleIndustryChange}
          />
          <FilterDropdown
            label="Region"
            value={filters.region}
            options={regionOptions}
            onChange={handleRegionChange}
          />
        </div>

        <button
          onClick={clearAllFilters}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All
        </button>
      </div>
    </div>
  );
}