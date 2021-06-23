import React, { Suspense } from 'react';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

import Routing from '../routes/Routing';
import { catalogRoutes } from '../routes/CatalogRoutes';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginTop: theme.spacing(2),
		},
	})
);

const CatalogLayout: React.FC = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth='md'>
			<Routing routes={catalogRoutes} />
		</Container>
	);
};

export default CatalogLayout;
