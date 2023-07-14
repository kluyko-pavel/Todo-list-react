import { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import "./FormSearch.scss";
import { useDispatch } from "react-redux";
import { ITodoInfo } from "../../../types";
import { setDisplayedData } from "../../../redux/action-creators";

export const FormSearch = ({
  todos,
  completedTodos,
}: {
  todos: ITodoInfo[];
  completedTodos: ITodoInfo[];
}) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleShowCompletedTasks = () => {
    dispatch(setDisplayedData(completedTodos));
  };

  const handleShowAll = () => {
    dispatch(setDisplayedData(todos));
  };

  const handleSearchTasks = (e: any) => {
    if (e.code === "Enter") {
      e.preventDefault();
      const filterArr = todos.filter((item: ITodoInfo) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      );
      dispatch(setDisplayedData(filterArr));
    }
  };

  return (
    <form
      className="search-todo"
      name="search-todo"
      action="#"
      onKeyDown={handleSearchTasks}
    >
      <Input
        name="search-input"
        type="text"
        placeHolder="Search..."
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <Button text="Show All" type="button" onClick={handleShowAll} />
      <Button
        text="Show Completed"
        type="button"
        onClick={handleShowCompletedTasks}
      />
      <span className="count search-todo__todo-count">All: {todos.length}</span>
      <span className="count search-todo__completed-todo-count">
        Completed: {completedTodos.length}
      </span>
    </form>
  );
};
