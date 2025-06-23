import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

// MANDATORY: Define explicit interface with proper types
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  changePeriod: string;
  IconComponent: React.ElementType;
  iconBgClassName: string;
  iconColorClassName: string;
}

// CRITICAL: Use React.FC with the proper interface
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  changePeriod,
  IconComponent,
  iconBgClassName,
  iconColorClassName,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card className="p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className={cn('p-2 rounded-lg', iconBgClassName)}>
          <IconComponent className={cn('h-6 w-6', iconColorClassName)} />
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold tracking-tight text-foreground">{value}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          {isIncrease ? (
            <ArrowUp className="h-4 w-4 text-success mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 text-destructive mr-1" />
          )}
          <span className={cn('font-medium', isIncrease ? 'text-success' : 'text-destructive')}>
            {change}
          </span>
          <span className="ml-1.5">{changePeriod}</span>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
