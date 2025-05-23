import React, { useState } from 'react';
import DashboardToggle from '@/components/DashboardToggle';
import StoreDashboard from '@/components/StoreDashboard';
import OwnDashboard from '@/components/OwnDashboard';
import ProductDashboard from '@/components/ProductDashboard';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

const Index = () => {
  const [activeTab, setActiveTab] = useState('store');
  
  const renderDashboard = () => {
    switch (activeTab) {
      case 'own':
        return <OwnDashboard />;
      case 'product':
        return <ProductDashboard />;
      case 'store':
      default:
        return <StoreDashboard />;
    }
  };
  
  return (
    <div className="min-h-screen bg-app-bg pb-16">
      {/* Header */}
      <Header />
      
      {/* Dashboard Toggle */}
      <div className="px-4 py-3">
        <DashboardToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      {/* Dashboard Content */}
      <div className="px-4">
        {renderDashboard()}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav activeView="dashboard" />
    </div>
  );
};

export default Index;
