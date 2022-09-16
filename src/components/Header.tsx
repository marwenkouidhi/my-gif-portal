import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";

const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-2 flex justify-between font-semibold">
      <img src="/favicon.ico" className="w-8" />
      <div>
        <button className="flex space-x-1 items-center bg-green-300 text-slate-900   px-3 rounded-md">
          <span className="text-lg">👉</span>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
