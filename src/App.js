import React from "react";
import { useSelector } from "react-redux";
import Product from "./components/Product";
import { selectItems } from "./features/basketSlice";

function App() {
  const items = useSelector(selectItems);

  console.log("The items are", items);

  return (
    <div className="App">
      <header className="p-4 flex justify-between items-center">
        {/* Left side */}
        <div className="">
          <h1 className="font-bold text-4xl">JOSSY STORE</h1>
          <h2 className="">Your no. 1 store for React stuff</h2>
        </div>

        {/* Right side */}
        <div className="">Cart Item: {items.length}</div>
      </header>

      <Product id="112" title="Ipad pro 2021" />
      <Product id="113" title="Soft skills by John" />
      <Product id="114" title="Rubix Cube" />
    </div>
  );
}

export default App;
