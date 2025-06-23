import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <h1 className={cn("text-3xl font-bold tracking-tight text-foreground", className)}>
      Dashboard Overview
    </h1>
  );
};

export default PageHeader;
