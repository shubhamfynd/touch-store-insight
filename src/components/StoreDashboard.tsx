
import React, { useState } from 'react';
import MetricCard from './MetricCard';
import BarChart from './BarChart';

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

const StoreDashboard: React.FC = () => {
  const [salesTimeFrame, setSalesTimeFrame] = useState('Weekly');
  const [lossesTimeFrame, setLossesTimeFrame] = useState('Weekly');
  
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-xl font-bold">Store Performance</h2>
      
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
      
      {/* Sales Dashboard */}
      <div>
        <h3 className="text-sm text-gray-500 font-medium mb-3">Sales Performance</h3>
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
          timeFrame={lossesTimeFrame}
          onTimeFrameChange={setLossesTimeFrame}
        />
      </div>
    </div>
  );
};

export default StoreDashboard;
