import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { Categories, categoryState, todoSelector } from "../atoms";

const TodoList = () => {
  const todos = useRecoilValue(todoSelector);

  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
