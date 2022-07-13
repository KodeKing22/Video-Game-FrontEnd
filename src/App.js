import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DisplayVideoGames from "./Components/DisplayVideoGames/DisplayVideoGames";
import VideoGameChart from "./Components/VideoGameChart/VideoGameChart";
import SearchVideoGames from "./Components/SearchVideoGames/SearchVideoGames";

function App() {
  const [videoGames, setVideoGames] = useState([]);

  async function getAllVideoGames() {
    let response = await axios.get("http://localhost:8080/all");
    setVideoGames(response.data);
  }
  useEffect(() => {
    getAllVideoGames();
  }, []);

  function SearchForVideoGames(searchTerm) {
    let gamesByName = videoGames.filter((game) => {
      if (game.name.includes(searchTerm)) {
        return true;
      }
    });
    console.log("Testing")
    setVideoGames(gamesByName);
  }

  return (
    <div className="App">
      <DisplayVideoGames videoGames={videoGames} />
      <VideoGameChart videoGames={videoGames} />
      <SearchVideoGames SearchForVideoGames={SearchForVideoGames} />
    </div>
  );
}

export default App;
