import React, { useState } from 'react';

const Form = (props) => {
  const { box, setBox } = props;
  const [ color, setColor] = useState("");
  const [ size, setSize] = useState(100);
  
  const submit = (event) => {
    event.preventDefault();

    setBox( [ 
      ...box, 
      { 
        color: color,
        size: size
      }
      ] );

    setColor("");
    setSize(100);
  }

  return (
    <div>
      <form onSubmit={ submit } style={{ margin: "10px" }}>
        <div className='d-flex col-5 mx-auto p-2 align-items-center' >
          <label className='m-2'>Color</label>
          <input type="text" name="color" className= "form-control m-2" value={color} onChange={ (e) => setColor(e.target.value) }/>
        <button className='btn btn-primary btn-sm'>Add</button>
        </div>
      </form>
  </div>
  )
}

export default Form;