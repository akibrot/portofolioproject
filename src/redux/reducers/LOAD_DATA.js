const inistate = {
  AllData: [],
};
const LOAD_DATA = (state = inistate, actions) => {
  switch (actions.type) {
    case "LOAD_DATA":
      return { AllData: actions.payload };
    default:
      return state;
  }
};

export default LOAD_DATA;
