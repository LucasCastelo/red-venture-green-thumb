import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReqProvider } from './context/ContextReq';

ReactDOM.render(
  <ReqProvider>
    <App />
  </ReqProvider>,
  document.getElementById('root')
);
