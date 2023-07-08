import { MongoClient } from "mongodb";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import AddTodo from "../../components/AddTodo";

import DisplayTodo from "../../components/DisplayTodo";
import { todoActions } from "../../store/todoSlice";

export default function Home(props) {
  const dispatch = useDispatch();

  const data = Object.values(props);

  dispatch(todoActions.updateTodos(data[0]));
  const todos = useSelector((state) => state.todo.todos);

  const [openAddTodo, setOpenAddTodo] = useState(false);

  const addTodoHandler = () => {
    setOpenAddTodo((todo) => !todo);
  };

  return (
    <>
      {todos.map((todo) => (
        <DisplayTodo
          key={todo.id}
          _id={todo._id}
          id={todo.id}
          todo={todo.todo}
        />
      ))}
      <button onClick={addTodoHandler}>Add Todo</button>
      {openAddTodo && <AddTodo />}
      <Link href="/today/completedtasks">completed tasks</Link>
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an api

  const client = await MongoClient.connect(
    "mongodb+srv://prakhar:lHzvcG7bbVDYguMg@cluster0.v7bxtre.mongodb.net/todoDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const todosCollection = db.collection("todoDatabase");

  const todoData = await todosCollection.find().toArray();

  client.close();

  return {
    props: {
      todoData: todoData.map((i) => ({
        _id: i._id.toString(),
        id: i.id,
        todo: i.todo,
      })),
    },
    revalidate: 1,
  };
}
