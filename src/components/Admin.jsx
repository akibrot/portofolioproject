import React from "react";
import "./admin.scss";
import DataGenerator from "./admin/DataGenerator";
import LISTHANDELER from "./admin/LISTHANDELER";
import TestimonialGenerator from "./admin/TestimonialGenerator";
function Admin() {
  return (
    <div className="admincont">
      <div className="left">
        <h1> ADMIN PANAL</h1>
      </div>
      <div className="right">
        <LISTHANDELER />
        <DataGenerator />
        <TestimonialGenerator />
      </div>
    </div>
  );
}

export default Admin;
