import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/atoms/todoListFilterState";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="me-2" htmlFor="filter">
        フィルター:
      </label>
      <select value={filter} onChange={changeFilter} id="filter">
        <option value="all">すべて</option>
        <option value="completed">完了</option>
        <option value="uncompleted">未完了</option>
      </select>
    </div>
  );
}
