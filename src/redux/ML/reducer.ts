import {
	GET_ALL_PRODUCTS,
	GET_PRODUCTS_BY_PRICE,
	GET_PRODUCT_BY_ID,
	GET_PRODUCT_CONDITION,
} from './types';

const INIT_STATE: any = {
	products: [],
	product: null,
	loading: false,
	error: false,
};

type MLAction = {
	type: string;
	payload: {} | string;
};

const ML = (state = INIT_STATE, action: MLAction) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				products: action.payload,
			};

		case GET_PRODUCTS_BY_PRICE:
			return {
				products: action.payload,
			};

		case GET_PRODUCT_BY_ID:
			return {
				...state,
				product: action.payload,
			};

		case GET_PRODUCT_CONDITION:
			return {
				...state,
				products: action.payload,
			};

		default:
			return state;
	}
};

export default ML;
