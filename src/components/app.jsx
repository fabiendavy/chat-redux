import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="app">
            <MessageList />
            <MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
