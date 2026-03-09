import React, { Fragment } from "react";
import reactDOM from "react-dom/client"
import { createElement } from "react";
import App from "./App.jsx";
import "./styles/global.css"

reactDOM.createRoot(document.getElementById("root")).render(
    <Fragment>
        <App/>
    </Fragment>
)