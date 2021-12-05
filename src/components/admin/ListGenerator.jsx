import React from "react";
import {  FaListAlt, FaTrash } from "react-icons/fa";
function ListGenerator({ data, deletehandeler }) {
  return (
    <div className="listcont">
      <div className="number"><FaListAlt/></div>
      <div className="items">
        <div className="name">{data.title}</div>
        <div className="delete">
          <FaTrash onClick={() => deletehandeler(data._id)} />
        </div>
      </div>
    </div>
  );
}

export default ListGenerator;
