import React from "react";
import { ReactComponent as OnSquareCodeLogo } from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <header className="">
      <div className="mt-5">
        <div className="flex flex-grow items-center justify-between">
          <div className="logo">
            <OnSquareCodeLogo />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-2 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              autoComplete="false"
              placeholder="Description"
              aria-label="Full name"
            />
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
