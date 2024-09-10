import React from "react";
import Option from "./components/option";
import icon from "./assets/icon.png";

function App() {
  return (
    <div className="w-[400px] rounded-md shadow-md p-6">
      <h1 className="text-green-500 font-semibold font-sans">
        Whatsapp Privacy{" "}
      </h1>
      <Option />
      <img src={icon} alt="" />
    </div>
  );
}

export default App;
