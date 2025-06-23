
import React from 'react';
import { DollarSign, Users, UserPlus, Activity, TrendingUp, TrendingDown } from 'lucide-react';

export default function KPICards({ filters }) {
  const kpis = [
    {
      name: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      name: 'User Signups',
      value: '2,350',
      change: '+180.1%',
      changeType: 'increase',
      icon: UserPlus,
      color: 'bg-blue-500',
      progress: 75,
    },
    {
      name: 'Total Users',
      value: '54,239',
      change: '+19%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      name: 'Active Sessions',
      value: '3,420',
      change: '-4.75%',
      changeType: 'decrease',
      icon: Activity,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.name}
          className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`${kpi.color} rounded-md p-3`}>
                  <kpi.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {kpi.name}
                  </dt>
                  <dd className="text-2xl font-bold text-gray-900 dark:text-white">
                    {kpi.value}
                  </dd>
                </dl>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                {kpi.changeType === 'increase' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={`ml-1 text-sm font-medium ${
                    kpi.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
            
            {kpi.progress && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="font-medium text-gray-900 dark:text-white">{kpi.progress}%</span>
                </div>
                <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${kpi.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
