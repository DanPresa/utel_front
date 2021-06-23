import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

interface IRoutes {
	routes: any[];
}

const Routing: React.FC<IRoutes> = ({ routes }) => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Switch>
				{routes.map((route: any, idx: number) => (
					<route.route
						key={idx}
						exact={route.exact}
						path={route.path}
						component={route.component}
					/>
				))}
			</Switch>
		</Suspense>
	);
};

export default Routing;
