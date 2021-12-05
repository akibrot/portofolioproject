import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FileBase from "react-file-base64";
import axios from "axios";
import "./Data.scss";
function DataGenerator() {
  const [picture, setpicture] = useState("");
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const [saved, setsaved] = useState(false);
  const [notsaved, setnotsaved] = useState(false);
  const state = useSelector((state) => state.ListReducer.Listarry);
 
  const submithandeler = async (e) => {
    e.preventDefault();
    console.log(picture);
    console.log(title);
    const senddata = {
      picture,
      title,
      discription,
    };
    await axios
      .post("http://localhost:8080/createdata", { senddata })
      .then((res) => {
        setsaved(true);
      })
      .catch((err) => {
        setnotsaved(true);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setnotsaved(false);
      setsaved(false);
    }, 700);
  }, [saved, notsaved]);
  return (
    <div className="boxx">
      <div className="maincont">
        <div className="title">
          <h3>Create Data</h3>
        </div>
        <div className="select">
          <select name="" id="" onChange={(e) => settitle(e.target.value)}>
            {state.map((val) => {
              return <option key={val._id}>{val.title}</option>;
            })}
          </select>
        </div>
        {saved ? <p>Data Saved</p> : ""}
        {notsaved ? <p className="red">Data Not Saved</p> : ""}

        <form onSubmit={submithandeler}>
          <div className="textareax">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="write some discription about project"
              required
              onChange={(e) => setdiscription(e.target.value)}
            ></textarea>
          </div>
          <div className="buttonsub">
            <div className="file">
              <FileBase onDone={({ base64 }) => setpicture(base64)} />
            </div>
            <div className="button">
              <button type="submit">Save </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataGenerator;
