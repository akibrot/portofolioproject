import React from "react";
import "./Lists.scss";

function Lists({ Data, click, active }) {
  return (
    <div
      className="list"
      onClick={() => click(Data.title)}
      style={
        Data.title === active
          ? { backgroundColor: "rgb(103, 30, 177)", color: "white" }
          : {}
      }
    >
      {Data.title}
    </div>
  );
}

export default Lists;
