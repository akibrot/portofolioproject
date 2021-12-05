import React, { useEffect, useState } from "react";
import ListGenerator from "./ListGenerator";
import axios from "axios";
import { useDispatch} from "react-redux";
import { LOAD_LIST } from "../../redux/actions/actions";
function LISTHANDELER() {
  const dispatch = useDispatch();
  const [LISTNAME, setLISTNAME] = useState("");
  const [saved, setsaved] = useState(false);
  const [notsaved, setnotsaved] = useState(false);
  const submithandler = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/createlist", { LISTNAME })
      .then((res) => {
        if (res) {
          setsaved(true);
        }
      })

      .catch((err) => {
        setnotsaved(true);
        console.log(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setsaved(false);
      setnotsaved(false);
    }, 700);
  }, [saved, notsaved]);

  const [LISTDATA, setLISTDATA] = useState([]);

  const getALLlist = async () => {
    await axios
      .get("http://localhost:8080/getalllist")
      .then((res) => {
        console.log(res.data);
        setLISTDATA(res.data);
        dispatch(LOAD_LIST(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getALLlist();
  }, [setLISTDATA, saved]);

  //delete list
  const deletehandeler = async (id) => {
    await axios
      .post("http://localhost:8080/listdelete", { id })
      .then((res) => {
        getALLlist();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  //test

  //counter

  return (
    <div className="box">
      <div className="createlist">
        <div className="title">
          <h3>Create List</h3>
        </div>
        <form onSubmit={submithandler}>
          <div className="form">
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                placeholder="List Name"
                required
                onChange={(e) => setLISTNAME(e.target.value)}
              />
            </div>
            <div className="button">
              <button type="submit">create</button>
            </div>
          </div>
        </form>
        <div className="created">
          {saved ? <p>List created secssfully</p> : ""}
          {notsaved ? <p className="red">List not created</p> : ""}
        </div>
        <div className="selectlist">
          {LISTDATA.length > 0 ? <h3>Created Lists</h3> : <h3>Empty List</h3>}

          {LISTDATA.map((data) => {
            return (
              <ListGenerator
                key={data._id}
                data={data}
                deletehandeler={deletehandeler}
              ></ListGenerator>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LISTHANDELER;
