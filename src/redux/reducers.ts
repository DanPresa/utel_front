import { combineReducers } from 'redux';

import ML from './ML/reducer';

const rootReducer = combineReducers({
	ML,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
