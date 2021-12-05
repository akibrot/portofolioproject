import React from "react";
import { FaArrowRight, FaFileArchive, FaTwitter } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import img from "./logo192.png";
import "./Testimonials.scss";
function Testi({ data }) {
  return (
    <div className="boxcont">
      <div className="avatar">
        <div className="left">
          <FaFileArchive />
        </div>
        <div className="center">
          <img src={data.picture.base64.base64} alt="" width="50px" />
        </div>
        <div className="right">
          <BsTwitter />
        </div>
      </div>
      <div className="para">
        <p>{data.discription}</p>
      </div>
      <div className="about">
        <div className="name">{data.Fullname}</div>
        <div className="work">{data.work}</div>
      </div>
    </div>
  );
}

export default Testi;
