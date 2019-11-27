import { combineReducers } from "@reduxjs/toolkit";

import eosReducer from "../reducers/eosReducer";

const rootReducer = combineReducers({
  eos: eosReducer
});

export default rootReducer;
