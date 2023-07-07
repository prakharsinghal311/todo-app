import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import AddTodo from "../../components/AddTodo";

import DisplayTodo from "../../components/DisplayTodo";

export default function Home() {
  const todos = useSelector((state) => state.todo.todos);

  const [openAddTodo, setOpenAddTodo] = useState(false);

  const addTodoHandler = () => {
    setOpenAddTodo((todo) => !todo);
  };

  return (
    <>
      {todos.map((todo) => (
        <DisplayTodo key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
      <button onClick={addTodoHandler}>Add Todo</button>
      {openAddTodo && <AddTodo />}
      <Link href="/today/completedtasks">completed tasks</Link>
    </>
  );
}
