import {useState,useEffect} from 'react'
import './App.css';
import React from 'react';
import axios from 'axios' 

function App() {

const [state,setState] = useState([])   


  // useEffect(()=> {

  //   .then ((res)=>{
  //   console.log(res)
  //   setState(res.data.results)
  //   })
  //   .catch((error)=>{
  //   })

    const makeCall = async () => {
      try{
        const results = await axios.get ('https://pokeapi.co/api/v2/pokemon?limit=807')
        setState (results.data.results)
      } catch(error) {}
    }

    // },[])

     return (
      
      <div className="App">
      <button onClick={makeCall}>Make API Call</button>
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