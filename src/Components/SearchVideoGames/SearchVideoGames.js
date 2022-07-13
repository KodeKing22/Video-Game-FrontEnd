import React, { useState } from "react";

const SearchVideoGames = ({SearchVideoGames}) => {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name)
    array.SearchVideoGames(name);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div>
        <label style={"centered"}>Seach Games By Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          style={"centered"}
        />
        <button type="submit" className="btn btn-primary" style={"centered"}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchVideoGames;
