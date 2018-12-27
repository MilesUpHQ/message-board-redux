import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import PublicForm from "../../publicBoard/PublicForm";
import Root from "../../../Root";

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

it("should render a textarea", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});

it("should render a blue button", () => {
  expect(wrapper.find("button.btn-primary").length).toEqual(1);
});

describe("textarea on Change", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "Type something" }
    });
    wrapper.update();
  });

  it("should change value when user is typing", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("Type something");
  });

  it("should empty textarea on submit", () => {
    wrapper.find("button").simulate("click");
    wrapper.update();
    //console.log(wrapper.find("textarea").props());
    expect(wrapper.find("textarea").prop("value")).toBe("");
  });

  it("check snapshot for PublicForm", () => {
    wrapper = renderer.create(
      <Root>
        <PublicForm />
      </Root>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // it("snapshot PublicForm component", () => {
  //   wrapper = renderer.create(
  //     <Root>
  //       <PublicForm />
  //     </Root>
  //   );
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });
});
