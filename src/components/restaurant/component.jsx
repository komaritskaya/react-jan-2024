import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{name}</h2>
      <Menu items={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};