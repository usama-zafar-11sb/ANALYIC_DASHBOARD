import React, { useRef } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Download, MoreHorizontal } from 'lucide-react';
import html2canvas from 'html2canvas';

const userGrowthData = [
  { month: 'Jan', users: 4000, revenue: 2400 },
  { month: 'Feb', users: 3000, revenue: 1398 },
  { month: 'Mar', users: 2000, revenue: 9800 },
  { month: 'Apr', users: 2780, revenue: 3908 },
  { month: 'May', users: 1890, revenue: 4800 },
  { month: 'Jun', users: 2390, revenue: 3800 },
  { month: 'Jul', users: 3490, revenue: 4300 },
];

const regionData = [
  { region: 'North America', users: 4000 },
  { region: 'Europe', users: 3000 },
  { region: 'Asia Pacific', users: 2000 },
  { region: 'Latin America', users: 1000 },
  { region: 'Africa', users: 500 },
];

const deviceData = [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 35, color: '#10B981' },
  { name: 'Tablet', value: 20, color: '#F59E0B' },
];

export default function ChartSection({ filters }) {
  const ChartCard = ({ title, children, actions = true }) => {
    const chartRef = useRef(null);

    const downloadChart = async () => {
      if (!chartRef.current) return;
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement('a');
      link.download = `${title.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
            {actions && (
              <div className="flex space-x-2">
                <button
                  onClick={downloadChart}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="p-6" ref={chartRef}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* User Growth Chart */}
      <div className="lg:col-span-2">
        <ChartCard title="User Growth Over Time">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
                <YAxis className="text-gray-600 dark:text-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgb(31 41 55)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Top Regions Chart */}
      <ChartCard title="Top Regions by Users">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="region"
                className="text-gray-600 dark:text-gray-400"
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(31 41 55)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Bar dataKey="users" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Device Types Chart */}
      <ChartCard title="User Device Types">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={2}
                stroke="#fff"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgb(31 41 55)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
                labelStyle={{
                  color: 'white'
                }}
                itemStyle={{
                  color: 'white'
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{
                  paddingTop: '20px',
                  fontSize: '14px',
                  color: 'rgb(107 114 128)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  );
}
