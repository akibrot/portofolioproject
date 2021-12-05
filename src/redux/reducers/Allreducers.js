import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import LOAD_DATA from "./LOAD_DATA";
import TestimonialReducer from "./TestimonialList";
const AllReducer = combineReducers({
  ListReducer,
  LOAD_DATA,
  TestimonialReducer,
});
export default AllReducer;
