import React from 'react';
import { useHistory } from 'react-router-dom';
import {
	createStyles,
	makeStyles,
	Theme,
	Divider,
	Typography,
} from '@material-ui/core';

interface ICardProps {
	product: any;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			backgroundColor: '#fff',
		},
		mb: {
			marginBottom: theme.spacing(2),
		},
		mbt: {
			marginBottom: theme.spacing(1),
			marginTop: theme.spacing(1),
		},
		card: {
			backgroundColor: '#fff',
			borderRadius: '3px',
			cursor: 'pointer',
			transition: 'all 1s cubic-bezier(.25, .8, .25, 1)',

			'&:hover': {
				boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
			},
		},
		cardImg: {
			width: '100%',
		},
		cardPrice: {
			padding: theme.spacing(1),
		},
		badgeN: {
			borderRadius: 5,
			backgroundColor: '#8bc34a',
			color: '#fff',
			display: 'inline',
			padding: '5px',
		},
		badgeU: {
			borderRadius: 5,
			backgroundColor: '#d32f2f',
			color: '#fff',
			display: 'inline',
			padding: '5px',
		},
	})
);

const Card: React.FC<ICardProps> = ({ product }) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div
			className={classes.card}
			onClick={() => history.push(`/article/${product.catalog_product_id}`)}
		>
			<div>
				<img className={classes.cardImg} src={product.thumbnail} />
			</div>
			<Divider />
			<div className={classes.cardPrice}>
				<span>
					<Typography variant='h5'>$ {Number(product.price)}</Typography>
				</span>

				<span>
					<Typography variant='body1'>{product.title.slice(0, 90)}</Typography>
				</span>
				<div className={classes.mbt}>
					{product.condition === 'new' ? (
						<Typography className={classes.badgeN} variant='body2'>
							Nuevo
						</Typography>
					) : (
						<Typography className={classes.badgeU} variant='body2'>
							Usado
						</Typography>
					)}
				</div>
				<div>
					<Typography variant='body1'>
						Disponibles: {product.available_quantity}
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Card;
