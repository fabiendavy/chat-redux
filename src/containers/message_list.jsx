import React, { Component } from 'react';
import Message from '../components/message';
import { connect } from 'react-redux';

class MessageList extends Component {

  render() {
    return(
      <div className="message-list">
        {this.props.allMessages.map((message) => {
          return <Message message={message} key={message.created_at} />
        })}
      </div>
    );
  }
};

function mapStateToProps(state) { return {
  allMessages: state.messages };
}

export default connect(mapStateToProps)(MessageList);
