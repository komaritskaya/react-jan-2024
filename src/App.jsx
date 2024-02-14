import { restaurants } from "./constants/mock";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import './styles/index.scss';
import { useState } from "react";
import { useMemo } from "react";
import { TabsList } from "./components/tabs-list/component";

export const App = () => {
	const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id);

	const selectedRestaurant = useMemo(
		() => restaurants.find((restaurant) => restaurant.id === selectedRestaurantId),
		[selectedRestaurantId]
	);

	const tabsOptions = restaurants.map((restaurant) => ({ label: restaurant.name, value: restaurant.id }));

	return (
		<Layout>
			<div>
				<TabsList options={tabsOptions} handleTabSelect={setSelectedRestaurantId} value={selectedRestaurantId} />
			</div>
			<Restaurant restaurant={selectedRestaurant} />
		</Layout>
	);
};
