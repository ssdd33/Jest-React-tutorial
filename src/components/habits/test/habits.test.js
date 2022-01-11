import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Habits from "../habits";

describe("habits component", () => {
  let habitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;
  const habits = [
    { name: "habit 1", count: 0, id: 1 },
    { name: "habit 2", count: 0, id: 2 },
  ];

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    habitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });
  it("renders", () => {
    const component = renderer.create(habitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("button click", () => {
    beforeEach(() => {
      render(habitsComponent);
    });
    it('calls onReset when clicking the "reset"button', () => {
      const button = screen.getByText("Reset All");
      userEvent.click(button);
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
