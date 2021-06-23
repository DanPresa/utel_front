import { lazy } from 'react';
import { Route } from 'react-router-dom';

const CatalogPage = lazy(() => import('../pages/catalog/index'));
const ArticlePage = lazy(() => import('../pages/article'));

export const catalogRoutes: any[] = [
	{
		path: '/',
		exact: true,
		component: CatalogPage,
		route: Route,
	},
	{
		path: '/article/:id',
		component: ArticlePage,
		route: Route,
	},
];
