import React, { useEffect, useState } from "react";
import "./works.scss";
import { FaClock } from "react-icons/fa";
function Works() {
  const arryData = [
    {
      id: 1,
      title: "Web Development",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquasi odit itaque neque. Non natus accusamus neque cumque. Dolorum, necessitatibus.",
    },
    {
      id: 2,
      title: "Android Development",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquasi odit itaque neque. Non natus accusamus neque cumque. Dolorum, necessitatibus.",
    },
    {
      id: 3,
      title: "Backend Development",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioquasi odit itaque neque. Non natus accusamus neque cumque. Dolorum, necessitatibus.",
    },
  ];
  const [back, setback] = useState(0);

  const [Data, setData] = useState([]);
  const goback = () => {
    if (back <= 0) return;
    else setback(back - 1);
  };

  const goforward = () => {
      console.log(arryData.length)
    if (back ===arryData.length-1) setback(0);
    else setback(back+1);
  };
  useEffect(() => {
    setData(arryData[back])
  }, [back,setData]);
  return (
    <div id="work">
      <div className="workscont">
        <div className="left" onClick={goback}>
          {"<"}
        </div>
        <div className="box">
          <div className="items">
            <div className="icon">
              <FaClock />{" "}
            </div>
            <div className="title">
              <h3>{Data.title}</h3>
            </div>
            <div className="para">
              <p>{Data.disc}</p>
            </div>
          </div>
          <div className="image">
            <img src="/logo192.png" alt=""  />
          </div>
        </div>
        <div className="right" onClick={goforward}>{">"}</div>
      </div>
    </div>
  );
}

export default Works;
