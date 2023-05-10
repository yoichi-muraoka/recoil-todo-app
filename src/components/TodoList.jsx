import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "../recoil/selectors/filteredTodoListState";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  if (todoList.length < 1) {
    return <div className="alert alert-primary">表示するTodoはありません</div>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr className="bg-dark text-white">
          <th>ID</th>
          <th>内容</th>
          <th>ステータス</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </tbody>
    </table>
  );
}
