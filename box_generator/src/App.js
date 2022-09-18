import './App.css';
import React, { useState } from 'react';
import Form from './Component/Form'
import Style from './Component/Style'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [ box, setBox ] = useState([]);

  return (
    <div className="App">
      <Form box={ box } setBox={ setBox } />
      <Style box={ box } />
    </div>
  );
}

export default App;