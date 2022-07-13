import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DisplayVideoGames from "./Components/DisplayVideoGames/DisplayVideoGames";
import VideoGameChart from "./Components/VideoGameChart/VideoGameChart";

function App() {
  const [videoGames, setVideoGames] = useState([]);

  async function getAllVideoGames() {
    let response = await axios.get("http://localhost:8080/all");
    setVideoGames(response.data);
  }
  useEffect(() => {
    getAllVideoGames();
  }, []);

  function SearchVideoGames(searchTerm) {
    let gamesByName = videoGames.filter((game) => {
      if (game.name.includes(searchTerm)) {
        return true;
      }
      setVideoGames(gamesByName);
    });
  }

  return (
    <div className="App">
      <DisplayVideoGames videoGames={videoGames} />
      <VideoGameChart videoGames={videoGames} />
      <SearchVideoGames SearchVideoGames={SearchVideoGames} />
    </div>
  );
}

export default App;
