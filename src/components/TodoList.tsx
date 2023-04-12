import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { todoSelector, todoState } from "../atoms";
import styled from "styled-components";

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
`;
const ListBox = styled.div`
  width: 25%;
`;

const TodoList = () => {
  const [todos, doing, done] = useRecoilValue(todoSelector);

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <CreateTodo />
      <ListWrap>
        <ListBox>
          <h2>To Do</h2>
          <ul>
            {todos.map((todo) => (
              <Todo key={todo.id} {...todo} />
              // <Todo text={todo.text} category={todo.category} id={todo.id} />
            ))}
          </ul>
        </ListBox>
        <ListBox>
          <h2>Doing</h2>
          <ul>
            {doing.map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
        </ListBox>
        <ListBox>
          <h2>Done</h2>
          <ul>
            {done.map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
        </ListBox>
      </ListWrap>
    </div>
  );
};

export default TodoList;
