export interface ITodoInfo {
  text: string;
  date: string;
  id: number;
  isComplete: boolean;
}

export interface IStoreState {
  todos: ITodosState;
}

export interface ITodosState {
  todos: ITodoInfo[];
  completedTodos: ITodoInfo[];
  displayedData: ITodoInfo[];
}
export interface ITodoChange {
  text: string;
  id: number;
}
