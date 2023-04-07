import React from "react";

const BounceLoader = (props) => {
  return (
      <div className="bouncing-loader flex flex-row justify-center w-screen h-screen items-center">
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default BounceLoader;