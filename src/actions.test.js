import { getDefaultMiddleware } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";

const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

import * as actions from "./actions";

describe("dispatch synchronous actions", () => {
  Object.keys(actions).forEach((actionCreatorName, i) => {
    if (typeof actions[actionCreatorName]() !== "function") {
      it("should dispatch action: " + actionCreatorName, () => {
        const initialState = {};
        const store = mockStore(initialState);

        store.dispatch(actions[actionCreatorName]());

        const dispatchedActions = store.getActions();
        const expectedPayload = { type: actions[actionCreatorName].toString() };
        expect(dispatchedActions).toEqual([expectedPayload]);
      });
    }
  });
});

it("should execute fetch info", () => {
  const store = mockStore({});

  return store.dispatch(actions.fetchInfo()).then(() => {
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[1].type).toEqual(
      actions.getEosInfoSuccess.toString()
    );
  });
});
