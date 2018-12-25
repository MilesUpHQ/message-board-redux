import React, { Component } from "react";
import PublicList from "./PublicList";
import PublicForm from "./PublicForm";

class PublicBoard extends Component {
  state = {
    posts: []
  };

  addPost = post => {
    this.setState({ posts: [...this.state.posts, post] });
  };

  deletePost = post => {
    const updateArray = this.state.posts.filter(m => m !== post);
    this.setState({ posts: updateArray });
  };
  render() {
    return (
      <div>
        <div>
          <PublicForm />
          <PublicList posts={this.state.posts} deletePost={this.deletePost} />
        </div>
      </div>
    );
  }
}

export default PublicBoard;
