import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlock } from "../actions";

const Block = ({ blockId }) => {
  const dispatch = useDispatch();
  const blockInfo = useSelector(state => state.eos.blocks[blockId]);
  useEffect(() => {
    if (!blockInfo) {
      dispatch(fetchBlock(blockId));
    }
  }, [blockId, blockInfo, dispatch]);
  return (
    <div>
      {blockInfo ? (
        <div>
          {blockInfo.timestamp} {blockInfo.id}{" "}
          {blockInfo.transactions.length + 1}
        </div>
      ) : (
        blockId
      )}
    </div>
  );
};

export default Block;
