import React, { useState } from "react";
import "../../../App.css";
import { useEffect } from "react";

const CreateRandomValue = () => {
  const [color, setColor] = useState("#000000");

  function CreateRandomValue(length) {
    return Math.floor(Math.random() * length);
  }

  function CreateRandomRgbColor() {
    const r = CreateRandomValue(256);
    const g = CreateRandomValue(256);
    const b = CreateRandomValue(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  function CreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[CreateRandomValue(hex.length)];
    }
    setColor(hexColor);
  }

  function callRandom() {
    const choice = Math.random() < 0.5 ? CreateRandomHexColor : CreateRandomRgbColor
    choice()
  }

  return (
    <>
      <div
        className={`w-[100vw] h-[60vh] text-white items-start justify-center`}
        style={{ background: color }}
      >
        <div className="flex gap-2 justify-center pt-4">
        <button className="p-2 font-bold" onClick={() => CreateRandomHexColor()}>
          Create HEX Color
        </button>
        <button className="p-2 font-bold" onClick={() => CreateRandomRgbColor()}>
          Create RGB Color
        </button>
        <button
            className="p-2 font-bold"
          onClick={callRandom}
        >
          Generate random color
        </button>
        </div>

        <div className="flex flex-col items-center leading-none justify-center text-[40px] relative top-20 text-white">
        <h3>Color</h3>
        <h1>{color}</h1>
      </div>
      </div>
    </>
  );
};

export default CreateRandomValue;
