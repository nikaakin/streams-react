

export const formReducer = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return { ...state, ...action.payload };
      default:
        return state;
  }
};
