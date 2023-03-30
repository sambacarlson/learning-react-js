import React from "react";

export default function Header() {

  return (
    <div className="flex flex-row bg-purple-800 text-white px-6 py-4 items-center justify-between w-full">
      <div className="flex flex-row items-center space-x-2">
        <img src="assets/angry-meme-transparent.png" alt="angry meme"  width={70}/>
        <h1 className="text-2xl font-semibold">Meme Generator</h1>
      </div>
      <h3 className="text-md">React course-Project 3</h3>
    </div>
  );
}