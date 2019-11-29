import React from "react";
import RefreshIcon from "./RefreshIcon";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap border-b-2 border-green-600 bg-teal-100 py-2 px-1">
      <div className="w-full block flex-grow flex lg:items-center lg:w-auto">
        <div className="flex-grow flex">
          <h1 className="uppercase inline text-lg font-bold">EOS.IO blocks</h1>
        </div>
        <div>
          <button className="inline-block border border-blue-500 bg-transparent hover:bg-blue-700 text-sm font-semibold hover:border-transparent text-blue-700 px-1 py-1 rounded">
            <RefreshIcon /> LOAD
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
