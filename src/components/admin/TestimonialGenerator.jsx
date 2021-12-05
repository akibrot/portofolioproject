import React, { useEffect, useState } from "react";
import "./TestimonialGenerator.scss";
import FileBase from "react-file-base64";
import axios from "axios";
function TestimonialGenerator() {
  const [Fullname, setFullname] = useState("");
  const [work, setwork] = useState("");
  const [email, setemail] = useState("");
  const [telegram, settelegram] = useState("");
  const [discription, setdiscription] = useState("");
  const [picture, setpicture] = useState("");

  const [datasent, setdatasent] = useState(false);
  const [datanotsent, setdatanotsent] = useState(false);

  const senddata = {
    Fullname,
    work,
    email,
    telegram,
    discription,
    picture,
  };
  const sendFiles = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/createtestimonial", { senddata })
      .then((res) => {
        console.log(res);
        setdatasent(true);
      })
      .catch((err) => {
        console.log(err);
        setdatanotsent(true);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setdatasent(false);
      setdatanotsent(false);
    }, 500);
  }, [datasent, datanotsent]);
  return (
    <div className="testimonalGencont">
      <form onSubmit={sendFiles}>
        <div className="title">
          <h3>Create Testimonial</h3>
        </div>
        {datanotsent ? <p>Data not sent please try again</p> : ""}
        {datasent ? <p>Data saved </p> : ""}
        <div className="name items">
          <input
            required
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="work items">
          <input
            type="text"
            required
            name=""
            id=""
            placeholder="Work Position"
            onChange={(e) => setwork(e.target.value)}
          />
        </div>
        <div className="gmail items">
          <input
            type="email"
            name=""
            id=""
            placeholder="E-mail"
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="telegram items">
          <input
            required
            type="text"
            name=""
            id=""
            placeholder="Telegram user name"
            onChange={(e) => settelegram(e.target.value)}
          />
        </div>
        <div className="discription  ">
          <textarea
            name=""
            id=""
            required
            cols="15"
            rows="6"
            placeholder="write some discription about the user"
            onChange={(e) => setdiscription(e.target.value)}
          ></textarea>
        </div>

        <div className="buttonsub">
          <div className="file">
            <FileBase onDone={({base64}) => setpicture(base64)} />
          </div>
          <div className="button">
            <button type="submit">Save </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestimonialGenerator;
