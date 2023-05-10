import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms/todoListState";

export default function TodoItemCreator() {
  // ステートのセッター関数の読み込み
  const setTodoList = useSetRecoilState(todoListState);

  // フォーム値の取得用
  const inputRef = useRef();

  // TODOの追加
  const addTodo = () => {
    // 入力値の取得
    const input = inputRef.current.value;

    // 未入力か確認
    if (input.trim() !== "") {
      // 追加するTODOの生成 ⇒ IDはランダムに設定
      const newTodo = {
        id: Math.floor(Math.random() * 100000000),
        text: input,
        isComplete: false,
      };
      // TODOの追加処理
      setTodoList((prev) => [...prev, newTodo]);
    }

    // フォームをリセット
    inputRef.current.value = "";
  };

  return (
    <div className="my-4">
      <input className="me-2" type="text" ref={inputRef} />
      <button className="btn btn-primary" onClick={addTodo}>
        TODOを追加
      </button>
    </div>
  );
}
