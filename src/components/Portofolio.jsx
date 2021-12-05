import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataList from "./DataList";
import Lists from "./Lists";
import "./Portofolio.scss";
function Portofolio() {
  const { Listarry } = useSelector((state) => state.ListReducer);
  const { AllData } = useSelector((state) => state.LOAD_DATA);
  const [searchdata, setsearchdata] = useState([]);
  const [active, setactive] = useState("Featured");

  const test = (title) => {
    setactive(title);
    if (title) {
      setsearchdata(AllData.filter((datas) => datas.title === title));
    } else {
    }
  };
  useEffect(() => {
    setsearchdata(AllData.filter((datas) => datas.title === "Featured"));
  }, [AllData]);
  return (
    <div id="port">
      <div className="portocont">
        <h1>Portofolio</h1>
        <div className="lists">
          {Listarry.map((Data) => {
            return (
              <Lists
                key={Data._id}
                Data={Data}
                active={active}
                click={test}
              ></Lists>
            );
          })}
        </div>
        <div className="Datascont">
          {searchdata.map((data) => {
            return <DataList key={data._id} data={data}></DataList>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
