import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const percentCompleted =
      totalNum === 0 ? 100 : (totalCompletedNum / totalNum) * 100;

    return { totalNum, totalCompletedNum, percentCompleted };
  },
});
