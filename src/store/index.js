import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const rootReducer = combineReducers({
  auth
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
