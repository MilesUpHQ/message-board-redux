export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POSTS":
      return [state, ...action.payload];
    default:
      return state;
  }
};
