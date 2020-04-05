import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Reducer from "./Store/Reducers/Reducer.js"
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
    Reducer,
    composeEnhancers(
        applyMiddleware(thunk)
        )
    )
const app =(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"));