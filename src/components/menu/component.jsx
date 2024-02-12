import styles from './styles.module.scss';

export const Menu = ({ items }) => {
  return (
    <>
      <h3>Меню:</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};