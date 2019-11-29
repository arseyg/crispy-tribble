import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { fetchInfo } from "../actions";

const EosStuff = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInfo());
  }, []);

  return (
    <div>
      <div>EOS.IO BLOCKS</div>
    </div>
  );
};

// hooks!
// useSelector and useDispatch
// instead of mapState and mapDispatch

export default EosStuff;
