export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      // const post = {
      //   id: Math.floor(Math.random() * 50),
      //   title: action.post
      // };
      return [...state, action.post];
    case "LOAD_POSTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
