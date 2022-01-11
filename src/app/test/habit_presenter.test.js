import Presenter from "../habit_presenter";

// describe("presenter", () => {
//   let habitPresenter;
//   let habits;
//   const setHabits = (newHabits) => {
//     habits = newHabits;
//   };
//   beforeEach(() => {
//     habitPresenter = new Presenter([
//       { id: 1, name: "Reading", count: 0 },
//       { id: 2, name: "Running", count: 0 },
//       { id: 3, name: "Coding", count: 0 },
//     ]);
//     habits = habitPresenter.getHabits();
//   });

//   it("init habits", () => {
//     expect(habits.length).toBe(3);
//   });
//   it("increment", () => {
//     habitPresenter.increment({ id: 1, name: "Reading", count: 0 }, setHabits);
//     expect(habits[0].count).toBe(1);
//   });
// });

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];
  let update;
  let presenter;
  beforeEach(() => {
    presenter = new Presenter(habits, 4);
    update = jest.fn();
  });

  it("inits with habits", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });
  const checkUpdateIsCalled = () => {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  };
  it("increments habit count and call update callback", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(1);
    checkUpdateIsCalled();
  });

  it("decrements habit count and call update callback", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("does not set the count value below 0 when decrements", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it("deletes habit from the list", () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(2);
    expect(presenter.getHabits()[0].name).toBe("Running");
  });

  it("adds new habit to the List", () => {
    presenter.add("eating", update);

    expect(presenter.getHabits()[3].count).toBe(0);
    expect(presenter.getHabits()[3].name).toBe("eating");
  });
  it("throws an error when the max habits limit is exceeded ", () => {
    presenter.add("eating", update);

    expect(() => {
      presenter.add("eating", update);
    }).toThrow(`습관의 갯수는 4개를 넘지 못함`);
  });
  it("resets all habit counts to 0", () => {
    presenter.reset(update);

    expect(presenter.getHabits()[0].count).toBe(0);
    expect(presenter.getHabits()[2].count).toBe(0);

    checkUpdateIsCalled();
  });
});
