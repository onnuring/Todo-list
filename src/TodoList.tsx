import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    // destructuring (ES6문법)
    setTodo(value);
    setTodoError("");
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          onChange={onChange}
          value={todo}
        />
        <button>Add</button>
        <p>{todoError !== "" ? todoError : null}</p>
      </form>
    </div>
  );
};

export default TodoList;
