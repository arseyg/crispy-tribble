import { createReducer } from "@reduxjs/toolkit";

import {
  getEosInfoStarted,
  getEosInfoSuccess,
  getEosInfoFailed,
  getBlockSuccess,
  getBlockFailed
} from "../actions";

export const initialState = {
  headBlockNum: null,
  blocks: {},
  activeBlocks: [],
  isInfoLoading: null,
  infoError: false,
  blockErrors: []
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
  },
  [getEosInfoFailed]: (state, action) => {
    state.infoError = true;
  },
  [getBlockFailed]: (state, action) => {
    state.blockErrors.push(action.payload);
  }
});

export default eosReducer;
