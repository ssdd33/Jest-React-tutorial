import React from "react";
import Habit from "../habit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
/*TODO:
1.props로 전달받은 habit이 화면에 렌더 되는지
2.버튼마다 event가 발생했을때 props로 전달받은 함수를 실행시키는지
 */

describe("habit", () => {
  let habitComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  const habit = { name: "habit 1", count: 0 };

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    habitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });
  it("renders", () => {
    const component = renderer.create(habitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("button click", () => {
    beforeEach(() => {
      render(habitComponent);
    });
    it('calls onIncrement when clicking "increment" button', () => {
      const button = screen.getByTitle("increment");
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });
    it('calls onDecrement when clicking "decrement"button', () => {
      const button = screen.getByTitle("decrement");
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });
    it('calls onDelete when clicking "delete"button', () => {
      const button = screen.getByTitle("delete");
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
