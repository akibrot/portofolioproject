const instate = {
  Testimonials: [],
};
const TestimonialReducer = (state = instate, actions) => {
  switch (actions.type) {
    case "ADD_TESTIMONIAL":
      return { Testimonials: actions.payload };
    default:
      return state;
  }
};
export default TestimonialReducer;
