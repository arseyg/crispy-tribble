import React from "react";
import RefreshIcon from "./RefreshIcon";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../actions";

const Header = () => {
  const isInfoLoading = useSelector(state => state.eos.isInfoLoading);
  const dispatch = useDispatch();
  return (
    <nav className="flex items-center justify-between flex-wrap border-b-2 border-green-600 bg-teal-100 py-2 px-1 md:py-4 md:px-3">
      <div className="w-full block flex-grow flex lg:items-center lg:w-auto">
        <div className="flex-grow flex">
          <h1 className="uppercase inline text-lg md:text-2xl font-bold">
            EOS.IO blocks
          </h1>
        </div>
        <div>
          <button
            onClick={() => dispatch(fetchInfo())}
            className="inline-block border border-blue-500 bg-transparent hover:bg-blue-700 text-sm font-semibold hover:border-transparent text-blue-700 px-1 py-1 rounded"
          >
            <RefreshIcon isLoading={isInfoLoading ? true : false} /> LOAD
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
