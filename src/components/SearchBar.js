// import React from "react";

// function SearchBar() {
//   return (
//     <form className="form-inline">
//       <input
//         className="form-control mr-sm-2"
//         type="search"
//         placeholder="Search"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "80%",
//           margin: "auto",
//           marginBottom: "20px",
//           marginTop: "20px",
//         }}
//       />
//       <button type="button" className="btn btn-primary">
//         Search
//       </button>
//     </form>
//   );
// }

// export default SearchBar;
import React, { useState } from "react";
import axios from "axios";
export const SearchBar = () => {
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //   console.log(searchQuery)
  const handlesearch = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${searchQuery}`
    );
    console.log(response.data[0]);
    setCountry(response.data[0]);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button onClick={handlesearch}>Search</button>
      </div>
      {country && !loading && (
        <div
          className="card"
          style={{
            width: "0%",
            alignItems: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          <img
            src={country.flags.png}
            className="card-img-top"
            alt="..."
            style={{
              width: "20%",
                height: "20%",
                alignItems: "center",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">{country.capital[0]}</p>
            <p className="card-text">{country.region}</p>
          </div>
        </div>
      )}

      {/* <h2 className="loading">loading...</h2> */}
    </div>
  );
};

export default SearchBar;
