import { ReactNode } from 'react';
import styles from './stack.module.scss';
import PropTypes from 'prop-types';

/* eslint-disable-next-line */
export interface StackProps {
  children: ReactNode[];
  orientation?:'column'|'row';
  spacing?: 0|1|2|3|4;
  className?: string;
}

export function Stack({children, orientation='column', spacing=0, className}: StackProps) {
  return (
    <div className={`${styles['container']} ${styles[orientation]} ${styles['spacing'+spacing]} ${className}`}>
      {children}
    </div>
  );
}

export default Stack;
