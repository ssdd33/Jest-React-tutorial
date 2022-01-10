// const HabitTracker = require("./habit_presenter");

// describe("habitTracker", () => {
//   let habitTracker;
//   beforeEach(() => {
//     habitTracker = new HabitTracker();
//   });

//   it("increment", () => {
//     habitTracker.handleIncrement({ id: 3, name: "Coding", count: 0 });
//     expect(habitTracker.habits[2].count).toBe(1);
//   });
//   it("decrement", () => {
//     habitTracker.handleIncrement({ id: 3, name: "Coding", count: 0 });
//     expect(habitTracker.habits[2].count).toBe(1);

//     habitTracker.handleDecrement({ id: 3, name: "Coding", count: 1 });
//     expect(habitTracker.habits[2].count).toBe(0);

//     habitTracker.handleDecrement({ id: 3, name: "Coding", count: 0 });
//     expect(habitTracker.habits[2].count).toBe(0);
//   });
//   it("delete", () => {
//     habitTracker.handleDelete({ id: 3, name: "Coding", count: 0 });

//     expect(habitTracker.habits.length).toBe(2);
//   });
//   it("add", () => {
//     habitTracker.handleAdd("new Habit");

//     expect(habitTracker.habits[3].name).toBe("new Habit");
//   });
//   it("reset", () => {
//     habitTracker.handleIncrement({ id: 3, name: "Coding", count: 0 });
//     expect(habitTracker.habits[2].count).toBe(1);

//     habitTracker.handleReset();
//     expect(habitTracker.habits[2].count).toBe(0);
//   });
// });
