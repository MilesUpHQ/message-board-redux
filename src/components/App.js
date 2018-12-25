import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";
import { postReducer } from "../reducers/post_reducer";

const rootReducer = combineReducers({
  posts: postReducer
});
const store = createStore(rootReducer);
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
