import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/action";

class PublicForm extends Component {
  state = {
    inputText: ""
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.inputText}
          className="form-control"
        />
        <button
          onClick={() => this.props.addPost(this.state.inputText)}
          className="btn btn-primary"
        >
          Post
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(PublicForm);
