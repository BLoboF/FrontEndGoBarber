import React from 'react';

import { Contaneir } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Contaneir className={className}>
      {children}
      <span>{title}</span>
    </Contaneir>
  );
};

export default Tooltip;
