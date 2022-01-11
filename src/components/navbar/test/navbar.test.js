import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../navbar";
/*TODO:
1.props로 전달받은 totalCount가 화면에 렌더되는지 */
describe("navbar", () => {
  it("renders", () => {
    const component = renderer.create(<Navbar totalCount={3} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
