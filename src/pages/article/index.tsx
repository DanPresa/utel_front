import React, { useEffect } from 'react';
import {
	Button,
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Divider,
} from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/ML/actions';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mb: {
			marginBottom: theme.spacing(2),
		},
		mtb: {
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2),
		},
		img: {
			width: '100%',
		},
	})
);

const ArticlePage = () => {
	const dispatch = useDispatch();
	const { product } = useSelector((state: any) => state.ML);

	const classes = useStyles();

	const param: any = useRouteMatch();
	const { params } = param;
	const { id } = params;

	const history = useHistory();

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch]);

	return (
		<div>
			<div className={classes.mb}>
				<Button
					variant='contained'
					color='secondary'
					onClick={() => history.push('/')}
				>
					Regresar
				</Button>
			</div>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<img
						alt={product?.name}
						className={classes.img}
						src={product?.pictures !== null ? product?.pictures[0].url : null}
					/>
				</Grid>
				<Grid item xs={12} sm={8}>
					<div>
						<div>
							<Typography variant='h5' component='h6'>
								{product?.name}
							</Typography>
							<Divider className={classes.mtb} />
							<Typography variant='body1' component='p'>
								{product?.short_description.content.slice(0, 500)}...
							</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default ArticlePage;
