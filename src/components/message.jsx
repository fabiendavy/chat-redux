import React, { Component } from 'react';

const Message = (props) => {
  return(
    <div className="message">
      <div className="author-date">
        {props.message.author} - {props.message.created_at}
      </div>
      <div className="content">
        {props.message.content}
      </div>
    </div>
  );
};

export default Message;
