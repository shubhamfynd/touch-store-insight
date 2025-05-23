
import React from 'react';
import { useNavigate } from "react-router-dom";

const QuickActions: React.FC = () => {
  const navigate = useNavigate();
  
  // Current date display
  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const dayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  const dayName = today.toLocaleDateString('en-US', dayOptions);
  
  const quickActions = [
    { 
      id: 'inventory',
      name: 'Inventory', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      ),
      route: "/inventory"
    },
    { 
      id: 'markdown',
      name: 'Markdown', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      ),
      route: "/markdown"
    },
    { 
      id: 'sales-report',
      name: 'Sales Report', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      ),
      route: "/reports/sales"
    },
    { 
      id: 'approvals',
      name: 'Approvals', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      ),
      route: "/approvals"
    },
    { 
      id: 'deliveries',
      name: 'Deliveries', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="2" y="4" width="15" height="15" rx="2"/><rect x="17" y="7" width="5" height="5" rx="1"/><path d="M12 12v7"/><path d="M7 12v7"/></svg>
      ),
      route: "/deliveries"
    },
    { 
      id: 'view-more',
      name: 'View More', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="m9 18 6-6-6-6"/></svg>
      ),
      route: "/actions"
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {/* Date and clock-in section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center">
            <span className="font-medium">{formattedDate}</span>
            <span className="text-gray-400 ml-2">{dayName}</span>
          </div>
          <div className="text-sm text-gray-500">On / 12h 0m</div>
        </div>
        <div className="flex items-center">
          <button 
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium"
            onClick={() => console.log("Clock in")}
          >
            Clock In
          </button>
        </div>
      </div>
      
      {/* Quick Actions header */}
      <h2 className="text-base font-medium text-gray-700 mt-6 mb-4">Quick Actions</h2>
      
      {/* Quick actions grid */}
      <div className="grid grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <div
            key={action.id}
            className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
            onClick={() => navigate(action.route)}
          >
            <div className="p-2">{action.icon}</div>
            <span className="text-xs text-gray-700 mt-1">{action.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
