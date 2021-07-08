import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  const jumbo = {
    padding: "4rem 2rem",
    marginBottom: "2rem",
    backgroundColor: "#6d6875",
    borderRadius: ".3rem",
    marginTop: "1rem",
    TextAlign: "center",
    color: "white"    
  }
  return (
    <div style={jumbo}>
      <h1>Breaking News!</h1>
        <p>
          Get the latest news here!
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </div>
  );
};

export default Header;
