import React from "react";

import { Provider } from "react-redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";
//import { render } from "@testing-library/react";

import { initialState as eosInitialState } from "../../reducers/eosReducer";
const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

it("shows the title", () => {
  const store = mockStore({ eos: eosInitialState });
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  expect(getByText("EOS.IO blocks")).toBeInTheDocument();
});

it("has a loading button", () => {
  const store = mockStore({ eos: eosInitialState });
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  expect(getByText("LOAD")).toBeInTheDocument();
});
