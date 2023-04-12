import { ITodo } from "../atoms";

const Todo = ({ text }: ITodo) => {
  return (
    <li>
      <span>{text}</span>
      <button>ToDo</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
};

export default Todo;
