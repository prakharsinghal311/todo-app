import { useDispatch, useSelector } from "react-redux";
import classes from "./DisplayTodo.module.css";
import { todoActions } from "../store/todoSlice";

function DisplayTodo(props) {
  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = useSelector((state) => state.todo.completedTodos);
  const dispatch = useDispatch();

  const todoClickHandler = () => {
    const temp = [...todos];
    const temp1 = temp.filter((i) => props.id !== i.id);
    console.log(temp1);
    dispatch(todoActions.updateTodos(temp1));

    let completedtodo = { id: props.id, todo: props.todo };
    const completed = [...completedTodos, completedtodo];
    dispatch(todoActions.updateCompletedTodos(completed));

    // const temp2 = { ...props, status: "completed" };
    // const temp3 = { ...temp2 };
    // delete temp3._id;

    fetch("/api/put-todo", {
      method: "PATCH",
      body: JSON.stringify({ todoid: props._id, status: "completed" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const data = response.json();
    });
  };

  const deleteHandler = () => {
    const temp = [...todos];
    const temp1 = temp.filter((i) => props.id !== i.id);
    dispatch(todoActions.updateTodos(temp1));
  };
  return (
    <>
      <h4>
        <button onClick={todoClickHandler} className={classes.dot1}></button>
        {props.todo}
        <button onClick={deleteHandler}>delete</button>
      </h4>
    </>
  );
}

export default DisplayTodo;
