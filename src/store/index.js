import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import OrderReducer from "./OrderReducer";


export let reducers = combineReducers({
    order: OrderReducer,
});

let store = createStore(reducers,
    applyMiddleware(thunk));

export default store;
