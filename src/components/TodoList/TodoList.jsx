import { useState } from "react";
import todosData from "./../../assets/todos.json";
import { TodoItem } from "./TodoItem.jsx";
import s from "./TodoList.module.css";

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const deleteTodo = (id) => {
    console.log(id);
    const newArr = todos.filter((item) => item.id !== id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(newArr);
  };
  return (
    <div className={s.box}>
      <div className="flex">
        <input
          placeholder="What do you need to do?"
          name="todo"
          className={s.input}
          type="text"
        />
        <button className="btn border">Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} onDeleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
