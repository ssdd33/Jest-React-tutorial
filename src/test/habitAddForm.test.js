import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HabitAddForm from "../components/habitAddForm";
import userEvent from "@testing-library/user-event";

describe("HabitAddForm", () => {
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
