import { useDispatch } from "react-redux";
import { ITodoInfo } from "../../types";
import { CustomCheckBox } from "../CustomCheckBox";
import "./Todo.scss";
import {
  changeTodoText,
  deleteTask,
  toggleComplete,
} from "../../redux/action-creators";
import { useState } from "react";

export const Todo = (props: ITodoInfo) => {
  const [text, setText] = useState(props.text);
  const dispatch = useDispatch();

  const handleToggleComplete = (todo: ITodoInfo) => {
    dispatch(toggleComplete(todo));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleChangeText = (e: any) => {
    setText(e.target.value);
    dispatch(changeTodoText({ text: e.target.value, id: props.id }));
  };

  return (
    <div
      className="todo-card"
      style={{
        border: props.isComplete
          ? "0.5px solid #000"
          : "1px solid hsla(0, 2%, 60%, 0.2)",
        boxShadow: props.isComplete
          ? "none"
          : "1px 1px 5px hsla(0, 4%, 68%, 0.2)",
      }}
    >
      <CustomCheckBox
        isComplete={props.isComplete}
        onChange={() => handleToggleComplete(props)}
      />
      <input
        className="todo-card__text"
        type="text"
        value={text}
        onChange={handleChangeText}
        style={{
          textDecoration: props.isComplete ? "line-through" : "none",
        }}
      />
      <time className="todo-card__date" dateTime={props.date}>
        {props.date}
      </time>
      <button
        className="todo-card__remove-card"
        type="button"
        onClick={() => handleDeleteTask(props.id)}
      ></button>
    </div>
  );
};
