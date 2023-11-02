import React from "react";
import App from "./App";
import "./main.scss";
import { createBrowserHistory } from "history";
import { createRoot } from "react-dom/client";
export const history = createBrowserHistory();

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);
root.render(<App tab="home" />);
