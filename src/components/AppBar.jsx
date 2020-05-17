import React from "react";

export const AppBar = ({ title }) => {
  return (
    <nav className="test-appBar flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">{title}</span>
      </div>
    </nav>
  );
};

export default AppBar;
