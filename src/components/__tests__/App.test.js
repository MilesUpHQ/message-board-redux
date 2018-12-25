import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import PublicBoard from "../publicBoard/PublicBoard";
import Navbar from "../Navbar";
import Root from "../Root";
import PublicForm from "../publicBoard/PublicForm";
import PublicList from "../publicBoard/PublicList";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("renders PublicBoard component", () => {
  expect(wrapper.find(PublicBoard).length).toEqual(1);
});

it("renders Navbar component", () => {
  expect(wrapper.find(Navbar).length).toEqual(1);
});

it("renders PublicForm component", () => {
  expect(wrapper.find(PublicForm).length).toEqual(1);
});

it("renders PublicList component", () => {
  expect(wrapper.find(PublicList).length).toEqual(1);
});
