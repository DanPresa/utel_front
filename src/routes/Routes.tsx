import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CatalogLayout from '../layouts/CatalogLayout';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route>
					<CatalogLayout />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
