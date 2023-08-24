//React 18
import React from "react";
import App from "./App";
import "./main.scss";
import { createBrowserHistory } from "history";
import { createRoot } from "react-dom/client";
export const history = createBrowserHistory();

const divRoot = document.getElementById("root");
const root = createRoot(divRoot); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// Antes
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './main.scss';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory();

// ReactDOM.render(
//   <React.StrictMode>
//     <App history={history} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
