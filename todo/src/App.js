import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Form from "./Components/Form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo} />
      <Display todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;