import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  password_1: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  //watch는 form의 입력값들의 변화를 관찰할 수 있게 해주는 함수이다.
  // console.log(watch());
  const onValid = (data: IFormData) => {
    if (data.password !== data.password_1) {
      setError(
        "password_1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* register함수가 반환하는 객체를 가져다가 input에 props로 주는 것 */}
        <input
          {...register("email", {
            required: "write here",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("first_name", { required: "write here" })}
          placeholder="First Name"
        />
        <span>{errors?.first_name?.message}</span>
        <input
          {...register("last_name", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.last_name?.message}</span>
        <input
          {...register("username", { required: "write here" })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "write here",
            minLength: { value: 5, message: "Your password should be longer" },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password_1", { required: "write here" })}
          placeholder="Password확인"
        />
        <span>{errors?.password_1?.message}</span>
        <button>Add</button>
        <p>{errors?.extraError?.message}</p>
      </form>
    </div>
  );
};

export default TodoList;
