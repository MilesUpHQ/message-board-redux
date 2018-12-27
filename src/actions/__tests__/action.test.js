import * as actions from "../action";

it("should return the correct type for addPost", () => {
  const result = actions.addPost("title");
  // console.log(result);
  expect(result.type).toEqual("ADD_POST");
  expect(result.post).toEqual("title");
});
