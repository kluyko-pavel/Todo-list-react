import { ITodoChange, ITodoInfo } from "../../types";
import {
  ADD_TODOS,
  CHANGE_TODO_TEXT,
  DELETE_ALL,
  DELETE_LAST,
  DELETE_TASK,
  SET_DISPLAYED_DATA,
  TOGGLE_COMPLETE,
} from "../action-types";

export const addTodos = (todo: ITodoInfo) => ({
  type: ADD_TODOS,
  todo,
});

export const toggleComplete = (todo: ITodoInfo) => ({
  type: TOGGLE_COMPLETE,
  todo,
});

export const deleteLast = () => ({
  type: DELETE_LAST,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});

export const deleteTask = (todoId: number) => ({
  type: DELETE_TASK,
  todoId,
});

export const setDisplayedData = (data: ITodoInfo[]) => ({
  type: SET_DISPLAYED_DATA,
  data,
});

export const changeTodoText = ({ text, id }: ITodoChange) => ({
  type: CHANGE_TODO_TEXT,
  text,
  id,
});
