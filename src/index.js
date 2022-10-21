import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {createRoot} from "react-dom/client"
import { store } from "./state/store.js";
import { Provider } from "react-redux";

const container= document.getElementById("app");
const root = createRoot(container);
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
)


