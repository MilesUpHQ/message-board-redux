export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      return state.filter(p => action.post !== p);
    case "LOAD_POSTS":
      const posts = action.posts.map(post => post.title);
      console.log("reducer", posts);
      return [...state, ...posts];
    default:
      return state;
  }
};
