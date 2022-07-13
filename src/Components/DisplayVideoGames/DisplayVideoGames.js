import React from "react";
import { Chart } from "react-google-charts";

const DisplayVideoGames = ({ videoGames }) => {
  function generateDataFormChart() {
    console.log(videoGames);

    //Filter the video games by year
    let filteredGames = videoGames.filter((games) => games.year > 2013);

    console.log("Filtered Games", filteredGames);

    let platform = filteredGames.map((game) => {
      return game.platform;
    });
    console.log("Platforms", platform);

    let distinctPlatform = [...new Set(platform)];
    console.log(distinctPlatform);

    let platformArrays = distinctPlatform.map((platform) => {
      let allGamesFromPlatform = filteredGames.filter(
        (game) => game.platform == platform
      );

      // now we need to loop through allGamesForPlatform and sum each games global sales
      let sum = 0;

      for (let i = 0; i < allGamesFromPlatform.length; i++) {
        sum += allGamesFromPlatform[i].globalsales;
      }

      // Once we have the sum of all of those games global sales = 10

      return [platform, sum, "blue"];
    });
    console.log(platformArrays);

    const data = [
      ["Platform", "Sales", { role: "style" }],
      ...platformArrays,

    ];
    console.log(data);
    return data;
  }
  return (
    <div>
      <h1>Platform By Global Sales in Millions</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataFormChart()}
      />
    </div>
  );
};

export default DisplayVideoGames;

// now we need to loop through allGamesForPlatform and sum each games global sales
