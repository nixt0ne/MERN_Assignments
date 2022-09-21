import {useState,useEffect} from 'react'
import './App.css';
import React from 'react';
import axios from 'axios' 

function App() {

const [state,setState] = useState([])   


  useEffect(()=> {
    axios.get ('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then ((res)=>{
    console.log(res)
    setState(res.data.results)
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