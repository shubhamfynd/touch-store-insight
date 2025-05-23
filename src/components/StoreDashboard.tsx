import React, { useState } from 'react';
import MetricCard from './MetricCard';
import BarChart from './BarChart';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import ProductTable from './ProductTable';

const salesData = [
  { name: 'Mon', value: 4200 },
  { name: 'Tue', value: 3800 },
  { name: 'Wed', value: 5100 },
  { name: 'Thu', value: 4700 },
  { name: 'Fri', value: 6200 },
  { name: 'Sat', value: 7400 },
  { name: 'Sun', value: 5800 }
];

const lossesData = [
  { name: 'Mon', value: 320 },
  { name: 'Tue', value: 280 },
  { name: 'Wed', value: 350 },
  { name: 'Thu', value: 290 },
  { name: 'Fri', value: 420 },
  { name: 'Sat', value: 380 },
  { name: 'Sun', value: 310 }
];

const productData = [
  { id: "1", name: "Basic T-shirt", category: "Apparel", sales: 12500, stock: 45, trend: 5.2 },
  { id: "2", name: "Slim Jeans", category: "Apparel", sales: 9800, stock: 32, trend: -2.1 },
  { id: "3", name: "Running Shoes", category: "Footwear", sales: 15600, stock: 28, trend: 7.8 },
  { id: "4", name: "Winter Jacket", category: "Outerwear", sales: 8400, stock: 12, trend: 3.4 }
];

const StoreDashboard: React.FC = () => {
  const [salesTimeFrame, setSalesTimeFrame] = useState('Weekly');
  const [activeSection, setActiveSection] = useState('kpis');
  
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-xl font-bold">Store Performance</h2>
      
      <Tabs 
        defaultValue="kpis" 
        className="w-full"
        onValueChange={(value) => setActiveSection(value)}
      >
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="kpis">Key Metrics</TabsTrigger>
          <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="kpis" className="space-y-6">
          {/* Assortment & Penetration */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Assortment & Penetration</h3>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard 
                title="SKU Count"
                value="1,428"
                trend={5}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Assortment Score"
                value="87%"
                color="success"
                trend={2}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Market Penetration"
                value="63%"
                color="warning"
                trend={-3}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Out of Stock"
                value="4.2%"
                color="danger"
                trend={1.5}
                trendLabel="vs target"
              />
            </div>
          </div>
          
          {/* Sales KPI */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Sales KPI</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <MetricCard 
                title="Total Sales"
                value="$142,847"
                trend={7.2}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Number of Bills"
                value="3,428"
                trend={4.1}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Avg. Bill Value"
                value="$41.67"
                trend={3.1}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Conversion Rate"
                value="28.5%"
                color="success"
                trend={1.8}
                trendLabel="vs target"
              />
            </div>
            <BarChart 
              title="Sales Trend" 
              data={salesData} 
              timeFrame={salesTimeFrame}
              onTimeFrameChange={setSalesTimeFrame}
            />
          </div>
          
          {/* Bill Penetration */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Bill Penetration</h3>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard 
                title="Avg. Items Per Bill"
                value="2.7"
                trend={0.3}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Cross-sell Rate"
                value="38%"
                color="success"
                trend={5}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Attachment Rate"
                value="42%"
                color="warning"
                trend={-2}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Return Rate"
                value="4.8%"
                color="danger"
                trend={0.3}
                trendLabel="vs last period"
              />
            </div>
          </div>
          
          {/* Merchandise Availability */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Merchandise Availability</h3>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard 
                title="In-Stock Rate"
                value="96.4%"
                color="success"
                trend={0.8}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Display Compliance"
                value="92%"
                color="success"
                trend={3}
                trendLabel="vs last check"
              />
              <MetricCard 
                title="Replenishment Rate"
                value="84.2%"
                color="warning"
                trend={-3.5}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Backroom Stock"
                value="$87,320"
                trend={-12.4}
                trendLabel="vs last month"
              />
            </div>
          </div>
          
          {/* Gross Margin */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Gross Margin</h3>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard 
                title="Overall GM%"
                value="36.4%"
                color="success"
                trend={1.2}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Apparel GM%"
                value="48.3%"
                color="success"
                trend={2.1}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Accessories GM%"
                value="42.7%"
                color="success"
                trend={0.6}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Footwear GM%"
                value="31.8%"
                color="warning"
                trend={-1.4}
                trendLabel="vs target"
              />
            </div>
          </div>
          
          {/* Sell through and Week Cover */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Sell Through & Week Cover</h3>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard 
                title="Avg. Sell Through"
                value="32%"
                color="success"
                trend={4.5}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Weeks of Supply"
                value="8.2"
                color="warning"
                trend={0.8}
                trendLabel="vs target (6)"
              />
              <MetricCard 
                title="New Release ST%"
                value="28%"
                color="warning"
                trend={-3.2}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Clearance ST%"
                value="76%"
                color="success"
                trend={12.4}
                trendLabel="vs target"
              />
            </div>
          </div>
          
          {/* Losses & Markdown */}
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-3">Losses & Markdown</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <MetricCard 
                title="Total Losses"
                value="$8,742"
                color="danger"
                trend={2.4}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Markdown Value"
                value="$12,385"
                color="warning"
                trend={-3.7}
                trendLabel="vs last period"
              />
              <MetricCard 
                title="Shrinkage"
                value="1.2%"
                color="success"
                trend={-0.3}
                trendLabel="vs target"
              />
              <MetricCard 
                title="Expiry Loss"
                value="$3,254"
                color="danger"
                trend={4.5}
                trendLabel="vs last period"
              />
            </div>
            <BarChart 
              title="Losses Trend" 
              data={lossesData} 
              timeFrame="Weekly"
              onTimeFrameChange={() => {}}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="dashboards" className="space-y-6">
          {/* Top selling products section */}
          <div className="mb-6">
            <ProductTable products={productData} />
          </div>
        
          {/* Additional dashboard cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Offline Sale and Stock on Hand */}
            <DashboardCard 
              title="Offline Sales & Stock on Hand" 
              description="Real-time offline sales data and current inventory levels"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>}
            />
            
            {/* P&L Dashboard */}
            <DashboardCard 
              title="P&L Dashboard" 
              description="Profit and loss statement with key financial metrics"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
            />
            
            {/* Merchandise Fills Dashboard */}
            <DashboardCard 
              title="Merchandise Fills" 
              description="Grade, brick & option wise merchandise fills tracking"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            />
            
            {/* NPS Score Dashboard */}
            <DashboardCard 
              title="NPS Score" 
              description="Net Promoter Score and customer satisfaction metrics"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>}
            />
            
            {/* Online Orders Fulfillment */}
            <DashboardCard 
              title="Online Orders Fulfillment" 
              description="Track and manage online order processing and delivery"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5 16 10 4 20"/></svg>}
            />
            
            {/* Other Store KPI Dashboard */}
            <DashboardCard 
              title="Other Store KPIs" 
              description="Additional performance indicators and metrics"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>}
            />
            
            {/* OC Monitoring */}
            <DashboardCard 
              title="OC Monitoring" 
              description="Operations center monitoring and real-time alerts"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Dashboard Card component for secondary dashboards
interface DashboardCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center">
        {icon && <div className="mr-3">{icon}</div>}
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <div className="ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;
