import "./config.scss";
import "./App.scss";
import { IStoreState, ITodoInfo } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayedData } from "./redux/action-creators";
import { Todo } from "./components";
import { useEffect } from "react";
import { FormSearch, FormTodo } from "./components/forms";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: IStoreState) => state.todos.todos);
  const completedTodos = useSelector(
    (state: IStoreState) => state.todos.completedTodos
  );

  useEffect(() => {
    dispatch(setDisplayedData(todos));
  }, [todos]);
  const displayedData = useSelector(
    (state: IStoreState) => state.todos.displayedData
  );

  return (
    <div className="app">
      <div className="container">
        <div className="forms-container">
          <FormTodo todos={todos} />
          <FormSearch todos={todos} completedTodos={completedTodos} />
        </div>
        <div className="todo-list">
          {displayedData.length ? (
            displayedData.map((todo: ITodoInfo) => (
              <Todo key={todo.id} {...todo} />
            ))
          ) : (
            <h3 className="empty-todos">It's still empty here!</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
