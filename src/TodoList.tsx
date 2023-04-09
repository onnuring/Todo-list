import { useState } from "react";
import { useForm } from "react-hook-form";

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

const TodoList = () => {
  const { register, watch } = useForm();
  //watch는 form의 입력값들의 변화를 관찰할 수 있게 해주는 함수이다.
  console.log(watch());

  return (
    <div>
      <form>
        {/* register함수가 반환하는 객체를 가져다가 input에 props로 주는 것 */}
        <input {...register("email")} placeholder="Email" />
        <input {...register("first_name")} placeholder="First Name" />
        <input {...register("last_name")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password_1")} placeholder="Password확인" />
        <button>Add</button>
        <p>{}</p>
      </form>
    </div>
  );
};

export default TodoList;
