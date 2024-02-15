import { useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const Dish = ({ dish }) => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<p><b>{dish.name}</b> ({dish.ingredients.join(', ')})</p>
				<p>${dish.price}</p>
			</div>
			<div className={styles.counter}>
				<Button disabled={count === 0} onClick={() => setCount(count - 1)} title='-' />
					<div className={styles.count}>{count}</div>
				<Button disabled={count === 5} onClick={() => setCount(count + 1)} title='+' />
			</div>
		</div>
	);
};