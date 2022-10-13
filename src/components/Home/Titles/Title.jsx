import React from "react";

const Title = ({ text }) => {
  const separatorStyle = {
    textAlign: "center",
    color: "hotpink",
    fontSize: "48px",
  };
  return (
    <div style={{ margin: "3rem 0rem" }}>
      <hr />
      <h1 style={separatorStyle}>{text}</h1>
      <hr />
    </div>
  );
};

export default Title;
