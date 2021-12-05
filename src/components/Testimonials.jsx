import React from "react";
import { FaArrowRight, FaFileArchive, FaTwitter } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import "./Testimonials.scss";
import Testi from "./Testi";
import { useSelector } from "react-redux";
function Testimonials() {
  const { Testimonials } = useSelector((state) => state.TestimonialReducer);
  return (
    <div id="test">
      <div className="title1">
        <h1>Testimonials</h1>
      </div>
      <div className="testicont">
        {Testimonials.map((data) => {
          return <Testi key={data._id} data={data}></Testi>;
        })}
      </div>
    </div>
  );
}

export default Testimonials;
