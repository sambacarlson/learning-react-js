import React from "react";
import Count from "./Count";

export default function Rough() {
  const [count, setCount] = React.useState(0);
  const [bools, setBools] = React.useState(true);
  return (
    <div className="p-2 absolute flex flex-row bottom-10 right-10 space-x-2 items-center justify-center">
      <div onClick={flips} className="bg-purple-800 text-white p-4 rounded-full mr-2 w-14 h-14">
        {bools? 'Yes' : 'No'}
      </div>
      <div className="flex flex-row items-end">
        <button onClick={subs} className="p-2 bg-gray-300 active:ring-2 ring-purple-800 w-12 h-12 rounded-full text-xl -mx-4 z-10 duration-150 shadow-lg">-</button>
        {/* ---------------- */}
        <Count number={count}/>
        <button onClick={adds} className="p-2 bg-gray-300 active:ring-2 ring-purple-800 w-12 h-12 rounded-full text-xl -mx-4 z-10 duration-150 shadow-lg">+</button>
      </div>
    </div>
  );
  function subs() {
    setCount(function (prevCount) {
      return prevCount-1;
    });
  }
  function adds() {
    setCount(prevCount => prevCount+1);
  }
  function flips() {
    setBools(prevBools =>  prevBools? false : true);
  }
}





