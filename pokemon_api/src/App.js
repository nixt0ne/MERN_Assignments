import {useState,useEffect} from 'react'
import './App.css';
import React from 'react';

function App() {

const [state,setState] = useState([])   


    useEffect(()=> {
    fetch ('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then ((result) => {
      return result.json()
 }) .then ((res)=>{
console.log(res)
setState(res.results)

 })
    .catch((error)=>{
    })

    },[])

     return (
      
      <div className="App">
      {
        state.map((pokemon)=>(
          <div>
            <h1>
              {pokemon.name}
            </h1>
          </div>
        ))
      }

    </div>
  );
}

export default App;


// 