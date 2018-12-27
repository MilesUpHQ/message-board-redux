import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";
class PublicList extends React.Component {
  handleDelete = post => {
    this.props.deletePost(post);
  };

  render() {
    if (!this.props.posts.length > 0) {
      return "no items found";
    }

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.fetchPosts()}
          className="btn btn-default"
        >
          Fetch Posts
        </button>
        <ul className="list-group">
          {this.props.posts.map(post => {
            return (
              <div key={post.id} className="card mt-1">
                <div className="card-body">
                  <span className="ml-2" role="img" aria-label="">
                    👍
                  </span>
                  <span className="mr-4 upvotes">1</span>
                  <b>Title:</b> {post.title}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  actions
)(PublicList);
