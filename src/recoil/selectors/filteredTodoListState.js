import { selector } from "recoil";
import { todoListFilterState } from "../atoms/todoListFilterState";
import { todoListState } from "../atoms/todoListState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.isComplete);
      case "uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
