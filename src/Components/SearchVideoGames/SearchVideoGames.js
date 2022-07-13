import React, { useState } from "react";

const SearchVideoGames = ({SearchForVideoGames}) => {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name)
    SearchForVideoGames(name);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div>
        <label>Seach Games By Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchVideoGames;
