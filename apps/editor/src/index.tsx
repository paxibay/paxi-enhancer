import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import { apptheme } from './styles/styles';
import Main from './app/Main';
import reportWebVitals from './reportWebVitals';

const AppComponent: React.FC = () => {
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.render(<AppComponent />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
