import React, { useState } from "react";

const Display = (props) => {
  const { todo, setTodo } = props;

  const handleCompleted = (todo) => {

    todo.deleteChecked = !todo.deleteChecked;
    setTodo([...todo]);
  };

  const styled = (deleteChecked) => {
    if (deleteChecked === true) {
      return "completed";
    } else {
      return "notCompleted";
    }
  };


  const deleteButton = (idFromBelow) => {
    setTodo(
      todo.filter((todo, index) => {
        return todo.id !== idFromBelow;
      })
    );
  };
  return (
    <div>
      {todo.map((todo, index) => (
        <div className={styled(todo.deleteChecked)} key={todo.id}>
          {" "}
          <p>{todo.textKey}</p> 
          <input type="checkbox" onChange={() => handleCompleted(todo)} />
          <button onClick={() => deleteButton(todo.id)}>Delete</button>{" "}
        </div>
      ))}
    </div>
  );
};

export default Display;