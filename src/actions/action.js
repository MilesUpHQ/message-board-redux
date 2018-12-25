import axios from "axios";

export const addPost = post => {
  return { type: "ADD_POST", post: post };
};

export const deletePost = post => {
  return { type: "DELETE_POST", post: post };
};

// export const loadPosts = posts => {
//   return { type: "LOAD_POSTS", posts: posts };
// };

export const fetchPosts = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/posts");
  return { type: "LOAD_POSTS", payload: response };
};
