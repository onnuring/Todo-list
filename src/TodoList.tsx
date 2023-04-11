import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

interface IForm {
  todo: string;
}
interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const TodoList = () => {
  // const value = useRecoilValue(todoState);
  // const modifier = useSetRecoilState(todoState);
  //두개의 함수대신 하나로 줄일 수 있다
  const [todos, setTodos] = useRecoilState(todoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setTodos((prev) => [
      ...prev,
      { text: todo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("todo", "");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
