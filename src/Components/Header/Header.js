import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  const jumbo = {
    padding: "4rem 2rem",
    marginBottom: "2rem",
    backgroundColor: "var(--bs-light)",
    borderRadius: ".3rem"
  }
  return (
    <div style={jumbo}>
      <h1>Breaking News!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </div>
  );
};

export default Header;
