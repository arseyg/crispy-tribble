import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchInfo } from "../actions";
import Header from "./Header";
import BlockList from "./BlockList";

const EosStuff = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <BlockList />
    </div>
  );
};

// hooks!
// useSelector and useDispatch
// instead of mapState and mapDispatch

export default EosStuff;
