import React from "react";

function SearchBar() {
  return (
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "auto",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <button type="button" class="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
