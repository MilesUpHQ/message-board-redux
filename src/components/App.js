import React from "react";
import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";
import Root from "./Root";

class App extends React.Component {
  render() {
    return (
      <Root>
        <div>
          <Navbar />
          <Route path="/" exact component={PublicBoard} />
          <Route path="/private" component={PrivateMessage} />
        </div>
      </Root>
    );
  }
}

export default App;
