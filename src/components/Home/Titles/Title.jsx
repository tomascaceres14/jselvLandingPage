import React from "react";

const Title = ({ text }) => {
  const separatorStyle = {
    textAlign: "center",
    color: "#f14d59",
    fontSize: "48px",
  };
  return (
    <div style={{ margin: "3rem 0rem" }}>
      <h2 style={separatorStyle}>{text}</h2>
    </div>
  );
};

export default Title;
