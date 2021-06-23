import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import List from './List';
import {
	createStyles,
	makeStyles,
	TextField,
	Theme,
	Grid,
	Typography,
	ButtonGroup,
	Button,
} from '@material-ui/core';
import {
	getProductConditionFn,
	searchProducts,
	sortByPriceFn,
} from '../../redux/ML/actions';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			backgroundColor: '#fff',
		},
		mb: {
			marginBottom: theme.spacing(2),
		},
		filters: {
			display: 'flex',
		},
	})
);

/* interface IFormData {
	term: string;
	items: string;
} */

const CatalogPage: React.FC = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state: any) => state.ML);

	const [term, setTerm] = useState<string>('');
	const [byPrice, setByPrice] = useState<string>('');
	const [itemsPerPage, setItemsPerPage] = useState<number>(30);

	const classes = useStyles();

	const searchByTerm = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setTerm(value);

		dispatch(searchProducts(value));
	};

	const getProductsByPrices = ({
		currentTarget: input,
	}: ChangeEvent<HTMLSelectElement>) => {
		const value = input.value;
		setByPrice(value);

		dispatch(sortByPriceFn(term, value));
	};

	const getConditions = (value: string) => {
		dispatch(getProductConditionFn(term, byPrice, value));
	};

	return (
		<>
			<TextField
				className={clsx(classes.textField, classes.mb)}
				label='Buscar productos, marcas y más...'
				variant='outlined'
				fullWidth
				name='term'
				onChange={searchByTerm}
			/>
			{products.length !== 0 && (
				<>
					<div className={clsx(classes.mb, classes.filters)}>
						<span>
							<Typography variant='subtitle2'>Ordenar por: </Typography>
						</span>
						<select onChange={getProductsByPrices}>
							<option>Más relevantes</option>
							<option value='price_desc'>Menor precio</option>
							<option value='price_asc'>Mayor precio</option>
						</select>
					</div>
					<div className={classes.mb}>
						<ButtonGroup
							color='secondary'
							aria-label='outlined primary button group'
						>
							<Button onClick={() => getConditions('new')}>Nuevo</Button>
							<Button onClick={() => getConditions('not_specified')}>
								Usado
							</Button>
						</ButtonGroup>
					</div>
				</>
			)}

			<Grid container spacing={2}>
				<List products={products} items={itemsPerPage} />
			</Grid>
		</>
	);
};

export default CatalogPage;
