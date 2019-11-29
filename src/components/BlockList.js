import React from "react";
import { useSelector } from "react-redux";

import Block from "./Block";

const BlockList = () => {
  const activeBlocks = useSelector(state => state.eos.activeBlocks);
  return (
    <div>
      {activeBlocks
        ? activeBlocks.map((e, i) => <Block blockId={e} key={e} />)
        : null}
    </div>
  );
};

export default BlockList;
