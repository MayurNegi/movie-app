import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducers from "./reducers";

// function looger(obj,next, action );
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {   // next is calling the nxt middleware in chain or dispatch if we are at last middleware
//     return function (action) {
//       console.log("ACTION_TYPE= ", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log("ACTION_TYPE= ", action.type);
  }
  next(action);
};

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(dispatch);
//     return;
//   }
//   next(action);
// };

const store = createStore(rootReducers, applyMiddleware(logger, thunk));

// console.log("store", store);
// console.log("before state", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("after state", store.getState());

ReactDOM.render(
  <React.StrictMode>
    {/* send store to App component as props */}
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
