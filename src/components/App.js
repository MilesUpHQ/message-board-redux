import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" exact component={PublicBoard} />
        <Route path="/private" component={PrivateMessage} />
      </div>
    );
  }
}

export default App;
