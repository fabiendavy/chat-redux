import React, { Component } from 'react';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  // scrollToBottom() {
  //   this.el.focus();
  // }

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }
  
  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }
  
  componentDidMount() {
    this.refresh = setInterval(() => this.props.fetchMessages(this.props.selectedChannel), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  render() {
    return(
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.allMessages.map((message) => {
              return <Message message={message} key={message.created_at} />
            })}
        </div>
        <MessageForm />
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
