import React from "react";

const Wrapper = (props) => {
  return <div className="w-full overflow-y-auto">{props.children}</div>;
};

export default Wrapper;
