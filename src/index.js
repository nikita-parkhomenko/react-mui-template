// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// local dependencies
import AppRoot from './module';

// styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
  document.getElementById('root')
);
