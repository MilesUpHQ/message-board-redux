export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "DELETE_POST":
      return state.filter(p => action.post !== p);
    case "LOAD_POSTS":
      console.log(action.posts.data);
      let posts = action.posts.data.map(post => post.title);
      // const posts = action.posts.map(post => post.title);

      return [...state, posts];
    default:
      return state;
  }
};
