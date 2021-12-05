import React, { useState } from "react";
import "./navbar.scss";
import {
  BsMailbox2,
  BsPersonFill,
  BsX,
  BsMenuButtonWide,
} from "react-icons/bs";
import SideMenu from "./SideMenu";
function NavBar() {
  const [open, setopen] = useState(false);
  const test = () => {
    setopen(!open);
  };
  return (
    <div className="navcont" style={open ? { backgroundColor: "rgb(204, 219, 64)"} : { backgroundColor: "white" }}>
      <div
        className="left"
        
      >
        <div className="logo">genius.</div>
        <div className="items">
          <div className="items">
            <div className="ic">
              <BsPersonFill />
            </div>
<div className="t">
+251989489349

</div>
          </div>
          <div className="items">
            <div className="ic">
              <BsMailbox2 />
            </div>
            
            <div className="t">
            akibrotsamuelas@gmail.com
            </div>

            
          </div>
        </div>
      </div>
      <div className="right" onClick={test}>
        {open ? <BsX className="ic" /> : <BsMenuButtonWide className="ic" />}
      </div>
      <SideMenu open={open} close={test}/>
    </div>
  );
}

export default NavBar;
