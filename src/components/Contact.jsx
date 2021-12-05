import React, { useState } from "react";
import "./Contact.scss";
function Contact() {
  const [thankes, setthankes] = useState("");
  const sendmessage = (e) => {
    // e.preventDefault();
    setthankes("Thanks!, i will replay ASAP ):");
  };
  return (
    <div id="contact" className="contactcont">
      <div className="left"></div>
      <div className="right">
        <form
          onSubmit={() => sendmessage()}
        >
          <div className="form">
            <div className="email">
              <input
                type="email"
                name="email"
                id=""
                placeholder="your email"
                required
              />
            </div>
            <div className="content">
              <textarea
                required
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="content"
              ></textarea>
            </div>
            <div className="igotit">{thankes}</div>
            <div className="sendbtn">
              <button > send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
