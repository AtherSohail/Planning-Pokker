import React from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      DataisLoaded: false,
    };
  }
  // ComponentDidMount is used to
  // execute the code
  // execute the code
  // execute the code
  componentDidMount() {
    fetch("https://restcountries.com/v2/region/europe")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          countries: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, countries } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <React.Fragment key={countries}>
      <div className="App">
        <h1>List of Countries</h1>
        <DropDown />
        <SearchBar />
        <table
          className="table table-striped table-bordered table-hover"
          striped="true"
          bordered="true"
          hover="true"
          style={{
            justifyContent: "center",
            width: "80%",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "60px",
          }}
        >
          <thead className="table-dark">
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Flag</th>
              <th>subregion</th>
            </tr>
          </thead>
          <tbody className="thead-dark">
            {countries.map((item) => (
              <tr item={item}>
                <td >{item.numericCode}</td>
                <td>{item.name}</td>
                <td>{item.capital}</td>
                <td>
                  <img
                    width="20px"
                    height="10px"
                    src={item.flags.png}
                    alt="flag"
                  />
                </td>
                <td>{item.subregion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
