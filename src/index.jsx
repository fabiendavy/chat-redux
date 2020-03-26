// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

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
  selectedChannel: "paris",
  currentUser: prompt("What's your username ?", `anonymous${Math.floor(10 + (Math.random() * 90))}`)
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannel,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {messages: initialState.messages, selectedChannel: initialState.selectedChannel}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
