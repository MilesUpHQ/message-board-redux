export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      return state.filter(p => action.post !== p);
    case "LOAD_POSTS":
      let posts = action.payload.data.map(post => post.title);
      return [...state, ...posts];
    default:
      return state;
  }
};
