import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";
class PrivateList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete = msg => {
    this.props.deleteMessage(msg);
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map((msg, index) => {
          return (
            <div key={index} className="card mt-1">
              <div className="card-body">
                <b>Title:</b> {msg.title}
                <br />
                <b>User Id:</b> {msg.userId}
                <span
                  onClick={this.handleDelete.bind(this, msg)}
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

const mapStateToProps = state => {
  return {
    messages: state.posts
  };
};

export default connect(
  mapStateToProps,
  actions
)(PrivateList);
