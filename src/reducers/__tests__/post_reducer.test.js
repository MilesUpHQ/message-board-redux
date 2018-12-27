import { postReducer } from "../post_reducer";

it("should handle add posts action", () => {
  const initialState = [];
  const post = {
    id: 24,
    post: "Test case"
  };
  const action = { type: "ADD_POST", post: post };
  const globalState = postReducer(initialState, action);
  expect(globalState).toEqual([post]);
});

it("should handle unknown action", () => {
  const action = { type: "UNKNOWN" };
  expect(postReducer([], action)).toEqual([]);
});
