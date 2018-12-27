import React from "react";
import { mount } from "enzyme";
import PublicForm from "../publicBoard/PublicForm";
import Root from "../../Root";
import App from "../App";
import PublicList from "../publicBoard/PublicList";

it("should render a public form", () => {
  let wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  expect(wrapper.find(PublicForm).length).toEqual(1);
  expect(wrapper.find(PublicList).length).toEqual(1);
  wrapper.unmount();
});
