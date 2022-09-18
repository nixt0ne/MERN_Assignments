import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const { todo, setTodo } = props;


  const submitHandler = (e) => {
    e.preventDefault();

    setTodo([
      ...todo,
      {
        textKey: text,
        deleteChecked: false,
        id: Math.floor(Math.random() * 100000000).toString(),
      },
    ]);
    setText("");
  };

  return (
    <div >
      <form onSubmit={submitHandler}>
        <div className="d-flex col-4 mx-auto">
        <input className="form-control" value={text} onChange={(e) => setText(e.target.value)} type="text"/>
        <button className="btn btn-primary m-2" >Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;