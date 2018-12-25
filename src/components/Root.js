import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { BrowserRouter } from "react-router-dom";
import { postReducer } from "../reducers/post_reducer";

// const logger = store => next => action => {
//   const result = next(action);
//   console.log("Logger:", action.type, store.getState());
//   return result;
// };

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log("Logger:", action.type, store.getState());
      return result;
    };
  };
};
const rootReducer = combineReducers({
  posts: postReducer
});

class Root extends Component {
  render() {
    const initialState = this.props.initialState ? this.props.initialState : {};
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(logger, reduxPromise)
    );

    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>{this.props.children}</BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default Root;
