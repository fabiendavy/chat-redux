import React, { Component } from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return(
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content">
          {this.props.allMessages.map((message) => {
              return <Message message={message} key={message.created_at} />
            })}
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) { return {
    allMessages: state.messages,
    selectedChannel: state.selectedChannel
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
