import { useDispatch, useSelector } from "react-redux";

function completedtasks() {
  const completedTodos = useSelector((state) => state.todo.completedTodos);
  return completedTodos.map((i) => <h4>{i.todo}</h4>);
}

export default completedtasks;
