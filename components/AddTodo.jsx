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

    let oneTodo = { id, todo, status: "incompleted" };

    fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(oneTodo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      //const data = response.json();
    });

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
