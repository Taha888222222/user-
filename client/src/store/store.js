import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reduceurs";
import { thunk } from "redux-thunk";






const composeEnhancer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;



const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;