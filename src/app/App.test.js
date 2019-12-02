import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

import { initialState as eosInitialState } from "../reducers/eosReducer";
const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

it("renders without crashing", () => {
  const initialState = {
    eos: eosInitialState
  };
  const store = mockStore(initialState);
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
