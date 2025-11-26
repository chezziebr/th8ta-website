import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-md ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
