
import React from 'react';
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  trendLabel?: string;
  color?: 'default' | 'success' | 'warning' | 'danger';
  icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  color = 'default',
  icon
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'success': return 'text-success';
      case 'warning': return 'text-warning';
      case 'danger': return 'text-danger';
      default: return 'text-gray-900';
    }
  };

  const getTrendColor = () => {
    if (!trend) return '';
    return trend > 0 ? 'text-success' : 'text-danger';
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    return trend > 0 ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className={cn("text-xl font-bold mt-1", getColorClass())}>{value}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && (
          <div className="text-app-blue">
            {icon}
          </div>
        )}
      </div>
      
      {trend !== undefined && (
        <div className={cn("flex items-center mt-2 text-xs", getTrendColor())}>
          {getTrendIcon()}
          <span className="ml-1">{trend > 0 ? '+' : ''}{trend}%</span>
          {trendLabel && <span className="ml-1 text-gray-500">{trendLabel}</span>}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
