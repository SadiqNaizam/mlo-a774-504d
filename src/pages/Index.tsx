import React from 'react';
import TopHeader from '../components/layout/TopHeader';
import PageHeader from '../components/layout/PageHeader';
import StatCardGrid from '../components/Dashboard/StatCardGrid';

const DashboardOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <main className="p-6">
        <div className="mx-auto w-full max-w-screen-lg space-y-6">
          <PageHeader />
          <StatCardGrid />
        </div>
      </main>
    </div>
  );
};

export default DashboardOverviewPage;
