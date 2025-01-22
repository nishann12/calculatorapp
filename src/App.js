import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
            setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+", 
    "C"
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 p-3 border rounded bg-light">
          <div
            className="form-control text-end bg-dark text-white mb-3"
            style={{ fontSize: "1.5rem", height: "3rem" }}
          >
            {display || "0"}
          </div>
          <div className="row g-2">
            {buttons.map((button, index) => (
              <div className="col-3" key={index}>
                <button
                  onClick={() => handleClick(button)}
                  className={`btn ${
                    button === "C" ? "btn-danger" : "btn-secondary"
                  } w-100`}
                  style={{
                    fontSize: "1.2rem",
                    height: "3rem",
                  }}
                >
                 {button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
