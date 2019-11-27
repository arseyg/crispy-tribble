import { createReducer } from "@reduxjs/toolkit";

import { getEosInfoSuccess, getBlockSuccess } from "../actions";

const initialState = {
  headBlockNum: null,
  blocks: {},
  activeBlocks: []
};

const eosReducer = createReducer(initialState, {
  [getEosInfoSuccess]: (state, action) => {
    let headBlockNum = action.payload.head_block_num;
    state.headBlockNum = headBlockNum;
    state.activeBlocks = [...Array(10)].map((e, i) => {
      return headBlockNum - i;
    });
  },
  [getBlockSuccess]: (state, action) => {
    state.blocks[action.payload.block_num] = action.payload;
  }
});

export default eosReducer;
