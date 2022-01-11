import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import App from "../app";
import Presenter from "../habit_presenter";
/*TODO:
1.presenter,메소드 mock
2.navbar render 
3.habits-*/
describe("App", () => {
  let appComponent;
  beforeEach(() => {
    const presenter = new Presenter([
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 1 },
      { id: 3, name: "Coding", count: 0 },
    ]);
    appComponent = <App presenter={presenter} />;
  });

  it("renders", () => {
    const component = renderer.create(appComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Component", () => {
    beforeEach(() => {
      render(appComponent);
    });

    it("counts only active habits", () => {
      const button = screen.getAllByTitle("increment")[0];
      userEvent.click(button);
      const navbarCount = screen.getByTestId("total-count");
      expect(navbarCount.innerHTML).toBe("2");
    });
    it("adds new habit", () => {
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");

      userEvent.type(input, "test habit");
      userEvent.click(button);
      const addedName = screen.getAllByTestId("habit-name")[3];
      expect(addedName.innerHTML).toBe("test habit");
    });
  });
});
