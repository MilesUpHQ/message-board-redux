import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete = post => {
    this.props.deletePost(post);
  };

  render() {
    console.log("Posts", this.props.posts.length);
    if (!this.props.posts.length > 0) {
      return "no items found";
    }

    return (
      <ul className="list-group">
        {this.props.posts.map(post => {
          return (
            <div key={post} className="card mt-1">
              <div className="card-body">
                <span className="ml-2" role="img" aria-label="">
                  👍
                </span>
                <span className="mr-4 upvotes">1</span>
                {post}
                <span
                  onClick={this.handleDelete.bind(this, post)}
                  className="float-right"
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  actions
)(PostList);
