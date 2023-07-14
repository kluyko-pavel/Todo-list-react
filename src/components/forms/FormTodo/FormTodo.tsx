import { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import "./FormTodo.scss";
import { useDispatch } from "react-redux";
import { ITodoInfo } from "../../../types";
import { CreateObjectToDo } from "../../../utils";
import {
  addTodos,
  deleteAll,
  deleteLast,
} from "../../../redux/action-creators";

export const FormTodo = ({ todos }: { todos: ITodoInfo[] }) => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e: any) => {
    e.preventDefault();
    if (todoText.trim()) {
      console.log(todos);
      if (!todos.find((item: ITodoInfo) => item.text === todoText)) {
        const obj = CreateObjectToDo(todoText);
        dispatch(addTodos(obj));
        setTodoText("");
      } else {
        alert("Such a case already exists!");
        setTodoText("");
      }
    } else {
      alert("You didn`t enter the text, try again!");
    }
  };

  const handleDeleteAllTasks = () => {
    if (todos.length) {
      dispatch(deleteAll());
    } else {
      alert("Nothing to delete");
    }
  };

  const handlerDeleteLastTask = () => {
    if (todos.length) {
      dispatch(deleteLast());
    } else {
      alert("Nothing to delete");
    }
  };

  return (
    <form
      className="create-todo"
      name="create-todo"
      action="#"
      onSubmit={handleAddTask}
    >
      <Button text="Delete All" type="button" onClick={handleDeleteAllTasks} />
      <Button
        text="Delete Last"
        type="button"
        onClick={handlerDeleteLastTask}
      />
      <Button text="Add" type="submit" />
      <Input
        name="enter-todo"
        type="text"
        value={todoText}
        placeHolder="Enter todo ..."
        onChange={(e: any) => setTodoText(e.target.value)}
      />
    </form>
  );
};
