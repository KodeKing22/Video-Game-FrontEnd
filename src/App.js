import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [games, setGames] = useState([]);

  async function getAllVideoGames(){
    let response = await axios.get("http://localhost:8080/all");
    setGames(response.data);
    console.log(response.data);
  }
  useEffect(() =>{
    getAllVideoGames();

  },[])

  async function SearchVideoGames(getGame){
    let response = await axios.get("http://localhost:8080/all", getGame);
    if(response.data);
    await getAllVideoGames();
  }
  
  return (
    <div>
      <h3>Platform By Global Sales in Millions</h3>
    </div>
    
  );
}

export default App;
