// class HabitTracker {
//   constructor() {
//     this.habits = [
//       { id: 1, name: "Reading", count: 0 },
//       { id: 2, name: "Running", count: 0 },
//       { id: 3, name: "Coding", count: 0 },
//     ];
//   }

//   handleIncrement(habit) {
//     this.habits = this.habits.map((item) =>
//       item.id === habit.id ? { ...habit, count: item.count + 1 } : item
//     );
//   }
//   handleDecrement(habit) {
//     this.habits = this.habits.map((item) =>
//       item.id === habit.id
//         ? { ...habit, count: item.count - 1 < 0 ? 0 : item.count - 1 }
//         : item
//     );
//   }
//   handleDelete(habit) {
//     this.habits = this.habits.filter((item) => item.id !== habit.id);
//   }
//   handleAdd(name) {
//     this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
//   }
//   handleReset() {
//     this.habits = this.habits.map((item) => ({ ...item, count: 0 }));
//   }
// }

// module.exports = HabitTracker;

//ui에서 처리해야하는 로직을 테스트

class Presenter {
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = maxHabits;
  }
  getHabits() {
    return this.habits;
  }
  increment(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }
  decrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  }
  delete(habit, update) {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  }
  add(name, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(`습관의 갯수는 ${this.maxHabits}개를 넘지 못함`);
    }
    this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
    update(this.habits);
  }
  reset(update) {
    this.habits = this.habits.map((item) => ({ ...item, count: 0 }));
    update(this.habits);
  }
}

module.exports = Presenter;
