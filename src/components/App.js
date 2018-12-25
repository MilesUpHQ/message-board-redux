import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";
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
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, reduxPromise)
);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={PublicBoard} />
            <Route path="/private" component={PrivateMessage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
