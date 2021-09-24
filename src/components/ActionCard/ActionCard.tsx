import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { ActionProgress } from '../ActionProgress/ActionProgress';
import { ActionTitle } from '../ActionTitle/ActionTitle';

import styles from './ActionCard.module.css';

interface ActionCardProps {
  value: number;
  max: number;
  actionLabel: string;
  progressLabel: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * title UI component for user interaction
 */
export const ActionCard = ({
  value,
  max,
  style,
  className,
  id,
  icon,
  actionLabel,
  progressLabel,
  description,
  children,
}: ActionCardProps) => {
  return (
    <div className={`${styles['card']} ${className}`} style={style}>
      <ActionTitle label={actionLabel} icon={icon} />
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
};
