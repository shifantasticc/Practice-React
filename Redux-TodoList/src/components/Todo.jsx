import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import { marksAsDone } from '../features/todo/todoSlice';

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  let clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  let markDone = (id) => {
    dispatch(marksAsDone(id));
  };

  return (
    <>
      <h2>Todo List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: 'line-through' } : {}}
            >
              {todo.task}
            </span>{' '}
            &nbsp;
            <button onClick={() => clickHandler(todo.id)}>X</button>
            &nbsp;
            <button onClick={() => markDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
