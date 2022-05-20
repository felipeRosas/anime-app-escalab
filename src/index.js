import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
// import configureStore from './store/configureStore';
import rootReducer from "./reducers";


const initialState = {
  actualSeason: [],
  searchResult: null,
  detailAnimeInfo: null,
};

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
