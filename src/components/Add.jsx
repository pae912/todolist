import React, { useState, useEffect } from "react";
import "./Add.scss";

const Add = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  //   useEffect(() => {}, [list]);

  const addTodo = (e) => {
    // if (todo.trim() === "") return;
    // setList([...list, todo]);
    // setTodo("");
    // console.log(todo);
    setList([...list, { text: todo, completed: false }]);
    setTodo("");
    console.log(todo, list);
  };

  const editTodo = (i) => {
    const edit = [...list];
    edit[i].completed = !edit[i].completed;
    setList(edit);
    console.log(edit);
  };

  const deleteTodo = (index) => {
    const newTodo = [...list];
    newTodo.splice(index, 1);
    setList(newTodo);
  };
  return (
    <>
      <div className="add">
        <input
          type="text"
          placeholder="新增代辦事項"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="item">
        {list.map((todo, i) => (
          <li key={i}>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => editTodo(i)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button className="delete" onClick={() => deleteTodo(i)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Add;
