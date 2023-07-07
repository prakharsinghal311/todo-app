import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const todos = useSelector((state) => state.todo.todos);

  const submitHandler = (e) => {
    e.preventDefault();

    const id = `${Math.random()}`;

    let oneTodo = { id, todo };
    const todoData = [...todos, oneTodo];
    dispatch(todoActions.updateTodos(todoData));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={todoChangeHandler}></input>
        <button>add</button>
      </form>
    </>
  );
}

export default AddTodo;
