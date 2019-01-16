import React from "react";

const conditionalRender = FirstComponent => SecondComponent => props => {
  if (props.showFirst) {
    return <FirstComponent />;
  }
  return <SecondComponent />;
};

export default conditionalRender;
