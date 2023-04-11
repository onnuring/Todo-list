import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log("add to do", data.todo);
    setValue("todo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
