import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

let queueCount = 0;
const throttler = store => next => action => {
  let apiThrottleMs = 200;
  if (typeof action === "function") {
    // its a thunk and doing a data fetch. throttle it
    setTimeout(() => {
      queueCount -= 1;
      return next(action);
    }, (queueCount += 1) * apiThrottleMs);
  } else {
    return next(action);
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [throttler, ...getDefaultMiddleware()]
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
