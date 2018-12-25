import axios from "axios";

export const addPost = post => {
  return { type: "ADD_POST", post: post };
};

export const deletePost = post => {
  return { type: "DELETE_POST", post: post };
};

export const loadPosts = posts => {
  return { type: "LOAD_POSTS", posts: posts };
};

export const fetchPosts = () => {
  return (dispatch, state) => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log("ajax");
        console.log(response.data);
        dispatch(loadPosts(response.data));
      })
      .catch(error => {
        console.log("ajax error");
      });
  };
};
