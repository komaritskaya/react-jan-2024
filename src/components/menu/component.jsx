import { Dish } from '../dish/component';
import styles from './styles.module.scss';

export const Menu = ({ items }) => {
  return (
    <>
      <h3>Menu:</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}><Dish dish={item} /></li>
        ))}
      </ul>
    </>
  );
};