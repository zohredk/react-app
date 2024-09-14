import React, { Children } from "react";

const Wrapper = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
};

export default Wrapper;
