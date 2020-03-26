// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannel from './reducers/selected_channel_reducer';

// initial state
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: prompt("What's your username ?", `anonymous${Math.floor(10 + (Math.random() * 90))}`)
};

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state,
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannel,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
