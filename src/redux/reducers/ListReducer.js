const inistate = {
  Listarry: [],
};

const ListReducer = (state = inistate, actions) => {
  switch (actions.type) {
    case "LOAD_LIST":
      return { Listarry: actions.payload };
    default:
      return state;
  }
};

export default ListReducer;
