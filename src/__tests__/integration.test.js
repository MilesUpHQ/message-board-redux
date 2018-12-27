import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";
import Root from "../Root";
import PublicList from "../components/publicBoard/PublicList";

// const hardCoded = {
//   posts: []
// };

beforeEach(() => {
  moxios.install();

  moxios.stubRequest("http://jsonplaceholder.typicode.com/posts", {
    status: 200,
    response: [
      { id: 11, title: "mock ajax call 1" },
      { id: 22, title: "2nd mock ajax call" }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("should list mock ajax data", done => {
  let wrapper = mount(
    <Root>
      <PublicList />
    </Root>
  );
  wrapper.find("button.btn-default").simulate("click");
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("div.card").length).toEqual(4);
    // console.log(wrapper.render().text());
    done();
    wrapper.unmount();
  });
  // wrapper.update();
  // expect(wrapper.find("div.card").length).toEqual(2);
});
