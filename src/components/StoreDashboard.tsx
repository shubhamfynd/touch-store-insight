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
        <TabsList className="mb-4">
          <TabsTrigger value="kpis">Key Metrics</TabsTrigger>
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
