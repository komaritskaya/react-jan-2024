import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ className, disabled, onClick, title }) => {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

