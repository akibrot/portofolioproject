import React from "react";

function DataList({data}) {
  return (
    <div className="box">
      <img src={data.picture} height="170px" alt="" />
      <div className="title"><p>{data.discription}</p></div>
    </div>
  );
}

export default DataList;
