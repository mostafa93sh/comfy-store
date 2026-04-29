// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-right" />
  </Provider>,
);
