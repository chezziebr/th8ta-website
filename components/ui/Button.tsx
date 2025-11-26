import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-terracotta-dark)] focus:ring-[var(--color-terracotta)]',
    secondary: 'bg-[var(--color-sage)] text-white hover:bg-[var(--color-sage-dark)] focus:ring-[var(--color-sage)]',
    outline: 'border-2 border-[var(--color-sage)] text-[var(--color-sage)] bg-transparent hover:bg-[var(--color-sage)] hover:text-white focus:ring-[var(--color-sage)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
