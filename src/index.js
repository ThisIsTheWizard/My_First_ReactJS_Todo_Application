import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as sw from './sw';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('the_wizard')
);

sw.unregister();
