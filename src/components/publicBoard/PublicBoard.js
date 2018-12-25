import React, { Component } from "react";
import { connect } from "react-redux";
import PublicList from "./PublicList";
import PublicForm from "./PublicForm";
import * as actions from "../../actions/action";

class PublicBoard extends Component {
  addPost = post => {
    this.setState({ posts: [...this.state.posts, post] });
  };

  deletePost = post => {
    this.props.deletePost(post);
  };
  render() {
    return (
      <div>
        <div>
          <PublicForm addPost={this.addPost} />
          <PublicList deletePost={this.deletePost} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(PublicBoard);
