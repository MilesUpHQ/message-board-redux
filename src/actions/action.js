import axios from "axios";

export const addPost = post => {
  return { type: "ADD_POST", post: post };
};

export const loadPosts = response => {
  return { type: "LOAD_POSTS", payload: response.data };
};

export const fetchPosts = () => {
  return dispatch => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      dispatch(loadPosts(response));
    });
  };
  // return { type: "LOAD_POSTS", payload: response };
};
