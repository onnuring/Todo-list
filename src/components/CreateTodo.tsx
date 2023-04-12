import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setTodos((prev) => [...prev, { text: todo, id: Date.now(), category }]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please write a to do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
