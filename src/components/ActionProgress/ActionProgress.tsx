import React from 'react';

import styles from './ActionProgress.module.css'

interface ActionProgressProps {
  value: number;
  max: number;
  label?: string;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * title UI component for user interaction
 */
export const ActionProgress = ({ value, max, style, className, id, label }: ActionProgressProps) => {
  return (
    <div className={`${styles['wrapper']} ${className}`} style={style}>
      <label className={`${styles['label']}`} htmlFor={id}>{label}</label>
      <progress
        id={id}
        value={value}
        max={max}
        className={`${styles['progress']}`}
      />
    </div>
  );
};
