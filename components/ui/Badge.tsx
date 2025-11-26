import React from 'react';

interface BadgeProps {
  stage: 1 | 2 | 3 | 4;
  size?: 'sm' | 'md' | 'lg';
  stageName?: string;
  className?: string;
}

const stageColors = {
  1: 'bg-[#5C9EAD] text-white',         // Teal/Aqua - Fresh, immediate
  2: 'bg-[var(--color-iolana)] text-white',  // Purple - Soothing, calm
  3: 'bg-[var(--color-coral)] text-white',    // Coral - Warm, active
  4: 'bg-[var(--color-golden)] text-white',   // Golden - Restful, reset
};

const stageNames = {
  1: 'Immediate Swap',
  2: 'Shower & Soothe',
  3: 'Reintegrate',
  4: 'Reset',
};

export const Badge: React.FC<BadgeProps> = ({
  stage,
  size = 'md',
  stageName,
  className = '',
}) => {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const displayName = stageName || stageNames[stage];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${stageColors[stage]} ${sizes[size]} ${className}`}
    >
      Stage {stage}: {displayName}
    </span>
  );
};
