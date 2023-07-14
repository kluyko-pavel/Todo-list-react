import { ITodoInfo, ITodosState } from "../../types";
import {
  ADD_TODOS,
  CHANGE_TODO_TEXT,
  DELETE_ALL,
  DELETE_LAST,
  DELETE_TASK,
  SET_DISPLAYED_DATA,
  TOGGLE_COMPLETE,
} from "../action-types";

const initialState = {
  todos: [] as ITodoInfo[],
  completedTodos: [] as ITodoInfo[],
  displayedData: [] as ITodoInfo[],
};

const getInitialState = () => {
  const localState = localStorage.localState;
  if (localState) {
    const parse = JSON.parse(localState);
    const { todos } = parse;
    return todos;
  }
  return initialState;
};

const todosReducer = (state: ITodosState = getInitialState(), action: any) => {
  switch (action.type) {
    case ADD_TODOS: {
      const { todo } = action;
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }
    case TOGGLE_COMPLETE: {
      const { todo } = action;
      const index = state.completedTodos.findIndex(
        (el: ITodoInfo) => el.id === todo.id
      );
      const newCompleted = [...state.completedTodos] || [];
      if (index === -1) {
        newCompleted.push({ ...todo, isComplete: !todo.isComplete });
      } else {
        newCompleted.splice(index, 1);
      }
      return {
        ...state,
        todos: state.todos.map((el: ITodoInfo) =>
          el.id === todo.id ? { ...el, isComplete: !el.isComplete } : el
        ),
        completedTodos: newCompleted,
      };
    }
    case DELETE_ALL: {
      return {
        ...state,
        todos: [],
        completedTodos: [],
      };
    }
    case DELETE_LAST: {
      const lastTodo = state.todos[state.todos.length - 1];
      const updatedTodos = state.todos.slice(0, -1);

      return {
        ...state,
        todos: updatedTodos,
        completedTodos: state.completedTodos.filter(
          (todo: ITodoInfo) => todo.id !== lastTodo.id
        ),
      };
    }
    case DELETE_TASK: {
      const { todoId } = action;
      const updatedTodos = state.todos.filter(
        (todo: ITodoInfo) => todo.id !== todoId
      );
      const completedTodoIndex = state.completedTodos.findIndex(
        (todo: ITodoInfo) => todo.id === todoId
      );

      return {
        ...state,
        todos: updatedTodos,
        completedTodos: state.completedTodos.filter(
          (todo, index) => index !== completedTodoIndex
        ),
      };
    }
    case SET_DISPLAYED_DATA: {
      const { data } = action;
      return {
        ...state,
        displayedData: data,
      };
    }
    case CHANGE_TODO_TEXT: {
      const { text, id } = action;
      return {
        ...state,
        todos: state.todos.map((el: ITodoInfo) =>
          el.id === id ? { ...el, text: text } : el
        ),
        completedTodos: state.completedTodos.map((el: ITodoInfo) =>
          el.id === id ? { ...el, text: text } : el
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
