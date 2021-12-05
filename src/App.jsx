import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "./App.scss";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Portofolio from "./components/Portofolio";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import axios from "axios";
import { LOAD_LIST, LOAD_DATA, ADD_TESTIMONIAL } from "./redux/actions/actions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const getALLlist = async () => {
    await axios
      .get("http://localhost:8080/getalllist")
      .then((res) => {
        dispatch(LOAD_LIST(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///test
  const getAllData = async () => {
    await axios
      .get("http://localhost:8080/getalldata")
      .then((res) => {
        dispatch(LOAD_DATA(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///test
  //getall testimonials
  const getAllTestimonials = async () => {
    await axios
      .get("http://localhost:8080/getalltestimonials")
      .then((res) => {
        dispatch(ADD_TESTIMONIAL(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //

  useEffect(() => {
    getAllData();
    getALLlist();
    getAllTestimonials();
  }, []);
  const user = true;
  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <Route path="/" exact>
          <Intro />
          <Portofolio />
          <Works />
          <Testimonials />
          <Contact />
        </Route>
        {user ? (
          <Route path="/admin" exact render={(props) => <Admin {...props} />} />
        ) : (
          <Redirect to="/test" />
        )}
      </div>
    </div>
  );
}

export default App;
