import React from "react";
import PrivateForm from "./PrivateForm";
import PrivateList from "./PrivateList";

class PrivateMessage extends React.Component {
  state = {
    messages: []
  };

  addMessage = msg => {
    this.setState({ messages: [...this.state.messages, msg] });
  };

  deleteMessage = msg => {
    const updateArray = this.state.messages.filter(m => m !== msg);
    this.setState({ messages: updateArray });
  };
  render() {
    return (
      <div>
        <PrivateForm addMessage={this.addMessage} />
        <PrivateList deleteMessage={this.deleteMessage} />
      </div>
    );
  }
}
export default PrivateMessage;
