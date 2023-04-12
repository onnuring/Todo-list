import { atom, selector } from "recoil";

// type categories = "TO_DO" | "DOING" | "DONE";
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

//selector 함수로 atom의 output을 변형시킨다
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    if (category === Categories.TO_DO) {
      return todos.filter((todo) => todo.category === Categories.TO_DO);
    } else if (category === Categories.DOING) {
      return todos.filter((todo) => todo.category === Categories.DOING);
    } else if (category === Categories.DONE) {
      return todos.filter((todo) => todo.category === Categories.DONE);
    }
  },
});
