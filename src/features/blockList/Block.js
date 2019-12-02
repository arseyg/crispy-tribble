import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBlock } from "../../actions";

const countActions = transactions => {
  return transactions.reduce((acc, cur) => {
    if (typeof cur.trx === "object") {
      return acc + cur.trx.transaction.actions.length;
    } else return acc + 0;
  }, 0);
};

const ActionCount = ({ transactions }) => {
  const actionCountValue = useMemo(() => countActions(transactions), [
    transactions
  ]);
  return <div className="text-lg italic px-2">{actionCountValue} actions</div>;
};

const Block = ({ blockId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const blockInfo = useSelector(state => state.eos.blocks[blockId]);
  const blockErrors = useSelector(state => state.eos.blockErrors);
  const hasError = blockErrors.includes(blockId);
  useEffect(() => {
    if (!blockInfo) {
      dispatch(fetchBlock(blockId));
    }
  }, [blockId, blockInfo, dispatch]);
  return (
    <div className="p-3 border-b-2">
      {hasError && (
        <div className="text-red-600">Error fetching block info</div>
      )}
      {blockInfo ? (
        <div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer"
          >
            <div className="text-sm">{blockInfo.timestamp}</div>
            <div className="text-lg p-2 break-all">{blockInfo.id}</div>
            <ActionCount transactions={blockInfo.transactions} />
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
        !hasError && <div className="p-4 spinner"></div>
      )}
    </div>
  );
};

export default Block;
