import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { fetchBlock } from "../actions";

const Block = ({ blockId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const blockInfo = useSelector(state => state.eos.blocks[blockId]);
  useEffect(() => {
    if (!blockInfo) {
      dispatch(fetchBlock(blockId));
    }
  }, [blockId, blockInfo, dispatch]);
  return (
    <div className="p-3 border-b-2">
      {blockInfo ? (
        <div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer"
          >
            <div className="text-sm">{blockInfo.timestamp}</div>
            <div className="text-lg p-2">{blockInfo.id}</div>
            <div className="text-lg italic px-2">
              {blockInfo.transactions.length + 1} actions
            </div>
          </div>
          {isOpen && (
            <div>
              <pre className="overflow-scroll h-40">
                {JSON.stringify(blockInfo, null, 4)}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 spinner"></div>
      )}
    </div>
  );
};

export default Block;
