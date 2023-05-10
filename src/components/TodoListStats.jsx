import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/selectors/todoListStatsState";

export default function TodoListStats() {
  const stats = useRecoilValue(todoListStatsState);

  return (
    <>
      <h2>現在の進捗</h2>
      <ul>
        <li>タスク数: {stats.totalNum}</li>
        <li>完了タスク数: {stats.totalCompletedNum}</li>
        <li>達成率: {stats.percentCompleted.toFixed(1)}%</li>
      </ul>
    </>
  );
}
