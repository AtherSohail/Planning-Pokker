import React from "react";
import "./App.css";
import DropDown from "./components/DropDown";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://restcountries.com/v2/region/europe")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <div className="App">
        <h1>List of Countries</h1>
        <DropDown />
        <table
          class="table table-striped table-bordered table-hover"
          striped
          bordered
          hover
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
          <tbody class="thead-dark">
            {items.map((item) => (
              <tr item={item}>
                <td>{item.numericCode}</td>
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
    );
  }
}

export default App;

