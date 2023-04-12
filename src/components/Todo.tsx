import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  // const onClick = (newCategory: ITodo["category"]) => {
  //   console.log(newCategory);
  // };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prev) => {
      //1. id로 해당타켓의 todo를 찾는다 (배열안에 있는 객체의 index를 찾는 방법만 알면된다)
      const targetIndex = prev.findIndex((todo) => todo.id === id);

      //2. 새로운 카데고리로 새로운 todo를 만들어야한다.
      const newTodo = { text, id, category: name as any };

      //3. prevTodo를 newTodo로 바꿔준다 (기존배열에서 타겟객체를 제외한 앞뒤로 잘라주고 새배열로 리턴함)
      return [
        ...prev.slice(0, targetIndex),
        newTodo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {/* 익명함수로 클릭이벤트를 처리하는 이유는 인자를 넘겨주어야 하기 때문이다 */}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={handleClick}>
          ToDo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={handleClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
