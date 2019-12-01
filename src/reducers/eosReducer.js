import { createReducer } from "@reduxjs/toolkit";

import {
  getEosInfoSuccess,
  getBlockSuccess,
  getEosInfoStarted
} from "../actions";

const initialState = {
  headBlockNum: null,
  blocks: {},
  activeBlocks: [],
  isInfoLoading: null
};

const eosReducer = createReducer(initialState, {
  [getEosInfoSuccess]: (state, action) => {
    let headBlockNum = action.payload.head_block_num;
    state.headBlockNum = headBlockNum;
    state.activeBlocks = [...Array(10)].map((e, i) => {
      return headBlockNum - i;
    });
    // remove unused block info from store
    Object.keys(state.blocks).forEach((bId, i) => {
      if (!state.activeBlocks.includes(Number(bId))) {
        delete state.blocks[bId];
      }
    });
    state.isInfoLoading = false;
  },
  [getBlockSuccess]: (state, action) => {
    state.blocks[action.payload.block_num] = action.payload;
  },
  [getEosInfoStarted]: (state, action) => {
    state.isInfoLoading = true;
  }
});

export default eosReducer;
