import { restaurants } from "./constants/mock";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import './styles/index.scss';

export const App = () => {
	return (
		<Layout>
			<div>
				{restaurants.map((restaurant) => (
					<div style={{ margin: '10px 0' }} key={restaurant.id}>
						<Restaurant restaurant={restaurant} />
					</div>
				))}
			</div>
		</Layout>
	);
};
