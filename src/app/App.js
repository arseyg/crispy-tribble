import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchInfo } from "../actions";
import Header from "../features/header/Header";
import BlockList from "../features/blockList/BlockList";

const App = () => {
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

export default App;
