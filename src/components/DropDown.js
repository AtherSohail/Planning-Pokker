import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Choose Region" style={{
        display: "flex",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        marginBottom: "20px",
        marginTop: "20px",

      }}>
      <Dropdown.Item href="#/action-1">Oceania</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Asia</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Russia</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Russia</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Africa</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
      
    </DropdownButton>


  );
}

export default DropDown;