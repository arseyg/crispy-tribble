import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { fetchBlock } from "../actions";

const actionCountSelector = createSelector();
//blocks

const countActions = blockInfo => {
  //return blockInfo.
  // blockInfo.transactions (is an arr)
  // [0].trx (either object or string)
  // .transaction.actions
};

const Block = ({ blockId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const blockInfo = useSelector(state => state.eos.blocks[blockId]);
  //const actionCount = useSelector()
  useEffect(() => {
    if (!blockInfo) {
      dispatch(fetchBlock(blockId));
    }
  }, [blockId, blockInfo, dispatch]);
  return (
    <div className="p-3 border-b-2">
      {blockInfo ? (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="text-sm">{blockInfo.timestamp}</div>
          <div className="text-lg p-2">{blockInfo.id}</div>
          <div className="text-lg italic px-2">
            {blockInfo.transactions.length + 1} actions
          </div>
          {isOpen && <div>BLOCKINFO</div>}
        </div>
      ) : (
        blockId
      )}
    </div>
  );
};

export default Block;
