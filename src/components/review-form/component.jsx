import { useReducer } from 'react';
import styles from './styles.module.scss';
import { INITIAL_STATE } from './constants';
import { Button } from '../button/component';

const reducer = (state, action) => {
	switch (action.type) {
		case 'setName':
			return { ...state, name: action.payload };
		case 'setText':
			return { ...state, text: action.payload };
		case 'setRating':
			return { ...state, rating: action.payload };
		default:
			return state;
	}
};

export const ReviewForm = ({ handleSubmit }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const {name, text, rating} = state;

  return (
    <form className={styles.root}>
			<label className={styles.label} htmlFor='name'>Name</label>
      <input
				className={styles.formControl}
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
      />

      <label className={styles.label} htmlFor='text'>Text</label>
      <textarea
				className={styles.formControl}
        type='text'
        name='text'
        id='text'
        value={text}
        onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
      />

      <label className={styles.label} htmlFor='rating'>Rating</label>
      <input
				className={styles.formControl}
        type='number'
        min={1}
        max={5}
        name='rating'
        id='rating'
        value={rating}
        onChange={(e) => dispatch({ type: 'setRating', payload: e.target.value })}
      />

      <Button
				onClick={
					(e) => {
						e.preventDefault();
						handleSubmit(state);
					}
				}
				title='Leave a review'
				disabled={!name || !text || rating < 1 || rating > 5}
				className={styles.submitBtn}
			/>
    </form>
  );
};