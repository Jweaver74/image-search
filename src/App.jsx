import React, {useRef} from "react";
import { Form } from "react-bootstrap";
import "./index.css";



const App = () => {
  const searchInput = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
  }

  return (
    <div className="container">
      <h1 className="title">image Search</h1>
      <div className="search-section">
        <form onSubmit ={handleSearch}>
          <Form.Control
            type="search"
            placeholder="type something to search"
            className="search-input"
            ref={searchInput}
          />
          </form>
      </div>
      <div className="filters">
        <div onClick={( ) => handleSelection("cats")}>Cats</div>
        <div onClick={( ) => handleSelection("dogs")}>Dogs</div>
        <div onClick={( ) => handleSelection("birds")}>Birds</div>
        </div>
    </div>
  );
};

export default App;
