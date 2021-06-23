import axios from 'axios';
import { API_URL } from '../../constant/constant';
import {
	GET_ALL_PRODUCTS,
	GET_PRODUCTS_BY_PRICE,
	GET_PRODUCT_BY_ID,
	GET_PRODUCT_CONDITION,
} from './types';

export const searchProducts = (term: string) => {
	return async (dispatch: any) => {
		try {
			if (term.length === 0) {
				dispatch({
					type: GET_ALL_PRODUCTS,
					payload: [],
				});

				return;
			}

			const { data } = await axios.get(`${API_URL}/search?q=${term}`);
			const { data: results } = data;
			const { results: resp } = results;

			dispatch({
				type: GET_ALL_PRODUCTS,
				payload: resp,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const sortByPriceFn = (
	term: string,
	items: string,
	condition?: string
) => {
	return async (dispatch: any) => {
		try {
			if (term.length === 0) {
				dispatch({
					type: GET_PRODUCTS_BY_PRICE,
					payload: [],
				});

				return;
			}

			const { data } = await axios.get(
				`${API_URL}/search?q=${term}&sort=${items}&condition=${condition}`
			);
			const { data: results } = data;
			const { results: resp } = results;

			dispatch({
				type: GET_PRODUCTS_BY_PRICE,
				payload: resp,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getProductById = (id: string) => {
	return async (dispatch: any) => {
		try {
			const { data } = await axios.get(`${API_URL}/product/${id}`);
			const resp = data.data;

			dispatch({
				type: GET_PRODUCT_BY_ID,
				payload: resp,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const getProductConditionFn = (
	term: string,
	sort?: string,
	condition?: string
) => {
	console.log(term, sort, condition);
	return async (dispatch: any) => {
		try {
			if (term.length === 0) {
				dispatch({
					type: GET_PRODUCT_CONDITION,
					payload: [],
				});

				return;
			}

			const { data } = await axios.get(
				`${API_URL}/search?q=${term}&sort=${sort}&condition=${condition}`
			);
			const { data: results } = data;
			const { results: resp } = results;

			dispatch({
				type: GET_PRODUCT_CONDITION,
				payload: resp,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
