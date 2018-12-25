import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../App";
import PublicForm from "../publicBoard/PublicForm";

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <PublicForm />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("Form should have textarea", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});

it("Form should have button", () => {
  expect(wrapper.find("button").length).toEqual(1);
});

describe("Onchange", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "Comment" }
    });
    wrapper.update();
  });

  it("should update value onChange", () => {
    expect(wrapper.find("textarea").prop("value")).toBe("Comment");
  });

  it("should clear value after submit", () => {
    wrapper = mount(
      <Root>
        <PublicForm />
      </Root>
    );

    wrapper.find("button").simulate("click");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toBe("");
  });
});

// it("sdfsd", () => {
//   const handleSubmit = jest.fn();
//   PublicForm.prototype.handleSubmit = handleSubmit;
//   wrapper = mount(
//     <Root>
//       <PublicForm addPost={handleSubmit} />
//     </Root>
//   );

//   wrapper.find("button").simulate("click");
//   expect(handleSubmit).toHaveBeenCalled();
// });
