
import React from 'react';
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeView: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2">
      <NavItem 
        label="Home" 
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        )}
        isActive={activeView === "home"} 
      />
      <NavItem 
        label="Dashboard" 
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
        )}
        isActive={activeView === "dashboard"} 
      />
      <NavItem 
        label="To-Do" 
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>
        )}
        isActive={activeView === "todo"} 
      />
      <NavItem 
        label="Promotions" 
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 13"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
        )}
        isActive={activeView === "promotions"} 
      />
      <NavItem 
        label="Analytics" 
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
        )}
        isActive={true} 
      />
    </div>
  );
};

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive }) => {
  return (
    <button className="flex flex-col items-center w-16">
      <div className={cn(
        "h-6",
        isActive ? "text-app-blue" : "text-gray-500"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-xs mt-1",
        isActive ? "text-app-blue font-medium" : "text-gray-500"
      )}>
        {label}
      </span>
    </button>
  );
};

export default BottomNav;
