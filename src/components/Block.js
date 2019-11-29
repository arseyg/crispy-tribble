import React from "react";
import { useSelector } from "react-redux";

const Block = ({ blockId }) => {
  const blockInfo = useSelector(state => state.eos.blocks[blockId]);
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
