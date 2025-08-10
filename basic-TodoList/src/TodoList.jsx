import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: 'Sample-Task!', id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState('');

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo('');
  };

  let updateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id),
    );
  };

  let markDoneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      }),
    );
  };

  let markDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      }),
    );
  };

  // let upperCaseAll = () => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       return { ...todo, task: todo.task.toUpperCase() };
  //     }),
  //   );
  // };

  // let upperCaseOne = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id == id) {
  //         return { ...todo, task: todo.task.toUpperCase() };
  //       } else {
  //         return todo;
  //       }
  //     }),
  //   );
  // };

  return (
    <div className="TodoList">
      <div>
        <h1>Task Todo!</h1>
        <button onClick={markDoneAll}>All Done</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="taskList">
              <span
                style={
                  todo.isDone ? { textDecorationLine: 'line-through' } : {}
                }
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>x</button>
              <button onClick={() => markDoneOne(todo.id)}>Done</button>
            </li>
          ))}
        </ul>
        <br />
      </div>
      <div className="userInput">
        <input
          placeholder="add a task"
          value={newTodo}
          onChange={updateTaskValue}
        />
        &nbsp; &nbsp;
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
}
