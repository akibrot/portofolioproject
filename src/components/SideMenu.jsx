import React from "react";
import "./SideMenu.scss";
function SideMenu({ open, close }) {
  return (
    <div
      className="sidecont"
      style={open ? { width: "100vw" } : { width: "0px" }}
    >
      <a href="#intro" onClick={close}>
        <div className="links">
          <h4>Intro</h4>
        </div>
      </a>
      <a href="#port" onClick={close}>
        <div className="links">
          <h4>Portofolio</h4>
        </div>
      </a>
      <a href="#work" onClick={close}>
        <div className="links">
          <h4>Works</h4>
        </div>
      </a>
      <a href="#test" onClick={close}>
        <div className="links">
          <h4>Testimolials</h4>
        </div>
      </a>
      <a href="#contact" onClick={close}>
        <div className="links">
          <h4>Contact</h4>
        </div>
      </a>
    </div>
  );
}

export default SideMenu;
