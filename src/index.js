import React from 'react';

/* import ReactDOM from "react-dom"; */
import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
