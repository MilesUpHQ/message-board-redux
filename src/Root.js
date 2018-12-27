import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { postReducer } from "./reducers/post_reducer";

const rootReducer = combineReducers({
  posts: postReducer
});

const logger = store => next => action => {
  const prevState = store.getState();
  const result = next(action);

  console.log("[Middleware prevState]", action.type, prevState);
  console.log("[Middleware currenState]", store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const dummyState = {
  posts: [{ id: 1, title: "Magesh" }, { id: 2, title: "Rajesh" }]
};

class Root extends Component {
  render() {
    const initialState = this.props.initialState
      ? this.props.initialState
      : dummyState;

    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(logger, reduxPromise, thunk))
    );

    return (
      <Provider store={store}>
        <BrowserRouter>{this.props.children}</BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
