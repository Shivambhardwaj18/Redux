import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { stateReducer } from "./Reducer"

const reducer = stateReducer

const middleware = [thunk];

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;