import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#282c34" }}>Homework 6 Matthew Kwong</h1>
      <p style={{ color: "#282c34", maxWidth: "600px", margin: "auto" }}>
        Hello this is the homepage. You can play tic tac toe or you can look up
        xkcd comics. Click on the buttons below to navigate to the corresponding
        pages.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/TicTacToe">
          <button
            style={{
              color: "#61dafb",
              background: "none",
              textDecoration: "none",
              border: "1px solid #61dafb",
              padding: "10px",
            }}
          >
            Play Tic Tac Toe
          </button>
        </Link>
        <Link to="/xkcd">
          <button
            style={{
              color: "#61dafb",
              background: "none",
              textDecoration: "none",
              border: "1px solid #61dafb",
              padding: "10px",
            }}
          >
            xkcd Comic Lookup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
