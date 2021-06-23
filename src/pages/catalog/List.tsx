import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../../components/Card';

interface IListProps {
	products: any[];
	items?: number;
}

const List: React.FC<IListProps> = ({ items = 30, products }) => {
	return (
		<>
			{products.slice(0, items).map((product, idx) => (
				<Grid key={idx} item xs={3}>
					<Card product={product} />
				</Grid>
			))}
		</>
	);
};

export default List;
