import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { todoState } from "../atoms";

const TodoList = () => {
  const todos = useRecoilValue(todoState);
  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
          // <Todo text={todo.text} category={todo.category} id={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
