import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    // destructuring (ES6문법)
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
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
      </form>
    </div>
  );
};

export default TodoList;
