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
    dispatch(todoActions.updateTodos(temp1));

    let completedtodo = { id: props.id, todo: props.todo };
    const completed = [...completedTodos, completedtodo];
    dispatch(todoActions.updateCompletedTodos(completed));
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
