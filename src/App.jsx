import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

export default function App() {
  return (
    <div className="container">
      <h1 className="my-4 display-4">My Todo List</h1>
      <hr />
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </div>
  );
}
