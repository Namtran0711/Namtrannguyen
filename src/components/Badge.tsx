import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gray-800 border border-gray-700 text-gray-300 ${className}`}
    >
      {children}
    </span>
  );
}
