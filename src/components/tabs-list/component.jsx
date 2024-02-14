import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const TabsList = ({ handleTabSelect, options, value }) => {

  return (
    <div className={styles.root}>
      {
        options.map((option) => {
          const activeTabClass = option.value === value ? styles.activeTab : '';

          return <Button
            key={option.value}
            title={option.label}
            onClick={() => handleTabSelect(option.value)}
            className={classNames(styles.tab, activeTabClass)}
          />;
        })
      }
    </div>
  );
};
