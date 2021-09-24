import React, { ReactNode } from 'react';

import styles from './ActionTitle.module.css'

interface ActionTitleProps {
  /**
   * This is the title text
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * optional icon
   */
  icon?: ReactNode;
  /**
   * className
   */
  className?: string;
  /**
   * style
   */
  style?: React.CSSProperties;
}

/**
 * title UI component for user interaction
 */
export const ActionTitle = ({ label, onClick, icon = null, style, className}: ActionTitleProps) => {
  return (
    <div className={`${styles['wrapper']} ${className}`} style={style} onClick={onClick}>
      <h4 className={`${styles['label']}`}>{label}</h4>
      {icon}
    </div>
  );
};
