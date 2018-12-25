import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import PublicList from "../publicBoard/PublicList";

const state = { posts: ["coming from test"] };
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root initialState={state}>
      <PublicList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("renders a list", () => {
  expect(wrapper.find("div.card").length).toEqual(1);
});

it("comment text should be correct", () => {
  expect(wrapper.render().text()).toContain("coming from test");
});

it("component willmount is called working", () => {
  const mockDidMount = jest.fn();
  PublicList.prototype.componentDidMount = mockDidMount;
  // jest.spyOn(PublicList.prototype, "componentDidMount");
  wrapper = mount(
    <Root>
      <PublicList />
    </Root>
  );
  expect(PublicList.prototype.componentDidMount).toHaveBeenCalled();
  expect(PublicList.prototype.componentDidMount).toHaveBeenCalledTimes(1);

  // const mockDidMount = jest.fn();
  // wrapper.prototype.componentDidMount = mockDidMount;
  // expect(wrapper.componentDidMount).toHaveBeenCalled();
});

it("componentWillUpdate is never called", () => {
  const mockDidUpdate = jest.fn();
  PublicList.prototype.componentDidUpdate = mockDidUpdate;
  wrapper = mount(
    <Root>
      <PublicList />
    </Root>
  );
  expect(PublicList.prototype.componentDidUpdate).not.toHaveBeenCalled();
});
