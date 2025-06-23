
import React from 'react';
import { 
  BarChart3, 
  Users, 
  Settings, 
  Home, 
  TrendingUp,
  FileText,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Menu
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Analytics', icon: BarChart3, current: false },
  { name: 'Users', icon: Users, current: false },
  { name: 'Reports', icon: FileText, current: false },
  { name: 'Growth', icon: TrendingUp, current: false },
  { name: 'Settings', icon: Settings, current: false },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out flex flex-col`}>
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-2"
          >
            <Menu className="w-5 h-5" />
          </button>
          {isOpen && (
            <>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Analytics
              </span>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`${
              item.current
                ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
            title={!isOpen ? item.name : ''}
          >
            <item.icon
              className={`${
                item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
              } ${isOpen ? 'mr-3' : 'mx-auto'} h-5 w-5`}
            />
            {isOpen && item.name}
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className={`flex items-center ${!isOpen && 'justify-center'}`}>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          )}
        </div>
        
        {isOpen && (
          <div className="mt-3 space-y-1">
            <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </a>
            <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
