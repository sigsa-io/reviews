import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import initialState from './initialState';

ReactDOM.render(<App initialState={initialState} />,
  document.getElementById('app'));
