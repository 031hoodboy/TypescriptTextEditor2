import { createElement as h, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { load } from "uinix-ui";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { config, system } from "./ui";

load({ config, h, system });

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
