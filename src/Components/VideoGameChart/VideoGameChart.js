import React from "react";
import { Chart } from "react-google-charts";

const VideoGameChart = ({ videoGames }) => {
  function questionDataFormChart() {
    console.log(videoGames);
    let filteredGames = videoGames.filter((games) => games.year > 2013);

    console.log("Filtered Games", filteredGames);

    let genre = filteredGames.map((game) => {
      return game.genre;
    });
    console.log("Genre", genre);

    let distinctGenre = [...new Set(genre)];
    console.log(distinctGenre);

    let genreArrays = distinctGenre.map((genre) => {
      let allGamesFromGenre = filteredGames.filter(
        (game) => game.genre == genre
      );

      // now we need to loop through allGamesForPlatform and sum each games global sales
      let sum = 0;

      for (let i = 0; i < allGamesFromGenre.length; i++) {
        sum += allGamesFromGenre[i].globalsales;
      }

      //    let genreByPlatform = allGamesFromGenre.filter(platform => platform.platform == platform);
      //    console.log(genreByPlatform)

      return [genre, sum, "Green"];
    });
    console.log(genreArrays);

    const data = [["Genre", "Sales", { role: "style" }], ...genreArrays];
    console.log(data);
    return data;
  }
  return (
    <div>
      <h1>Best Selling Genre</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
        data={questionDataFormChart()}
      />
    </div>
  );
};

export default VideoGameChart;
