import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import HabitAddForm from "../habitAddForm";
import userEvent from "@testing-library/user-event";

describe("HabitAddForm", () => {
  it("renders", () => {
    //스냅샷 테스트
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    //스냅샷 생성 : 컴포넌트의 대략적인 구조와 사용자에게 어떻게 보여져야하는지 DOM 요소들의 오브젝트를 기록.
    //스냅샷 업데이트 : npm run test -- -u
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("form submit", () => {
    let onAdd;
    let input;
    let button;
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });

    it("calls onAdd when button is clicked and valid habit is entered", () => {
      // fireEvent.change(input, { target: { value: "hello" } });
      // fireEvent.click(button);
      userEvent.type(input, "hello");
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledWith("hello");
    });

    it("does not call onAdd when the habit is empty", () => {
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
