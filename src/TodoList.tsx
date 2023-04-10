import { useState } from "react";
import { useForm } from "react-hook-form";
import { StringLiteral } from "typescript";

// const TodoList = () => {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     // destructuring (ES6문법)
//     setTodo(value);
//     setTodoError("");
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setTodoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           placeholder="할 일을 입력하세요"
//           onChange={onChange}
//           value={todo}
//         />
//         <button>Add</button>
//         <p>{todoError !== "" ? todoError : null}</p>
//       </form>
//     </div>
//   );
// };
interface IFormData {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  password_1: string;
  // errors: { message: string };
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  //watch는 form의 입력값들의 변화를 관찰할 수 있게 해주는 함수이다.
  // console.log(watch());
  const onValid = (data: any) => {
    console.log(data);
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
        <p>{}</p>
      </form>
    </div>
  );
};

export default TodoList;
