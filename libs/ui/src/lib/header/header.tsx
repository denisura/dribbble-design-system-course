import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
  className?: string;
}

export function Header({ title, className }: HeaderProps) {
  return (
    <div className={`${styles['container']} ${className}`}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
