// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Simple Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "white",
            borderRadius: "10%",
            color: "black",
          }}
          onClick={handleClick1}
        >
          +1
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "white",
            borderRadius: "10%",
            color: "black",
          }}
          onClick={handleClick2}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default App;
