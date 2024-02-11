import styles from './styles.module.scss';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы:</h3>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </>
  );
};