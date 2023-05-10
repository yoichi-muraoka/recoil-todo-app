import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListState";
import { useState } from "react";

export default function TodoItem({ item }) {
  const [editMode, setEditMode] = useState(false);

  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const changeText = (e) => {
    const text = e.target.value;
    if (text.trim() !== "") {
      const newTodo = { ...item, text };
      setTodoList(getUpdatedTodoList(todoList, newTodo));
    }
  };

  const changeStatus = (e) => {
    const isComplete = e.target.checked;
    const newTodo = { ...item, isComplete };
    setTodoList(getUpdatedTodoList(todoList, newTodo));
  };

  const deleteTodo = (e) => {
    setTodoList(getDeletedList(todoList, item.id));
  };

  return (
    <tr className="align-middle">
      <td>{item.id}</td>
      <td onDoubleClick={toggleEditMode}>
        {editMode ? (
          <input type="text" value={item.text} onChange={changeText} />
        ) : (
          <span>{item.text}</span>
        )}
      </td>
      <td>
        <input
          id={`check-${item.id}`}
          type="checkbox"
          checked={item.isComplete}
          onChange={changeStatus}
          className="me-2"
        />
        <label htmlFor={`check-${item.id}`}>
          {item.isComplete ? "完了" : "未完了"}
        </label>
      </td>
      <td>
        <button className="btn btn-danger" onClick={deleteTodo}>
          削除
        </button>
      </td>
    </tr>
  );
}

function getUpdatedTodoList(todoList, newTodo) {
  return [...todoList].map((todo) => {
    if (todo.id === newTodo.id) {
      return newTodo;
    } else {
      return todo;
    }
  });
}

function getDeletedList(todoList, id) {
  return [...todoList].filter((todo) => todo.id !== id);
}
