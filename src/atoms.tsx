import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

//selector 함수로 atom의 output을 변형시킨다
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    return [
      todos.filter((todo) => todo.category === "TO_DO"),
      todos.filter((todo) => todo.category === "DOING"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
