import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
// import configureStore from './store/configureStore';
import rootReducer from "./reducers";
// import "core-js/stable";
// import "regenerator-runtime/runtime"
import App from "./routes/App";


const initialState = {
  actualSeason: [],
  searchResult: null,
  animeDetail: {images:{}, title:'', trailer:'',studios:[], rating:'',episodes:0, synopsis:''},
  showModal:false,
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
