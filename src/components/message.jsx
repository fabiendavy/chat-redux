import React, { Component } from 'react';

const Message = (props) => {
  return(
    <div className="message-container">
      <i className="author">
        <span >{props.message.author}</span>
        <small>{props.message.created_at}</small>
      </i>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
