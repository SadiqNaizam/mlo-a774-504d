import React from 'react';
import StatCard from './StatCard';
import { DollarSign, Users, LineChart } from 'lucide-react';

// MANDATORY: Define data directly in the component file
const statsData = [
  {
    title: 'Monthly Recurring Revenue',
    value: '£48,320',
    change: '3.2%',
    changeType: 'increase' as const,
    changePeriod: 'vs last month',
    IconComponent: DollarSign,
    iconBgClassName: 'bg-sky-100',
    iconColorClassName: 'text-sky-500',
  },
  {
    title: 'Active Users',
    value: '1,245',
    change: '122',
    changeType: 'increase' as const,
    changePeriod: 'this week',
    IconComponent: Users,
    iconBgClassName: 'bg-emerald-100',
    iconColorClassName: 'text-emerald-500',
  },
  {
    title: 'Churn Rate',
    value: '1.8%',
    change: '0.2%',
    changeType: 'decrease' as const,
    changePeriod: 'vs last month',
    IconComponent: LineChart,
    iconBgClassName: 'bg-yellow-100',
    iconColorClassName: 'text-yellow-600',
  },
];

// CRITICAL: Use React.FC
const StatCardGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          changePeriod={stat.changePeriod}
          IconComponent={stat.IconComponent}
          iconBgClassName={stat.iconBgClassName}
          iconColorClassName={stat.iconColorClassName}
        />
      ))}
    </div>
  );
};

export default StatCardGrid;
