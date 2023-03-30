import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import EffectHook from './components2/EffectHook';
import Forms from './components2/Forms';
import WindowTracker from './components2/WindowTracker';


export default function App() {
  const [show, setShow] = React.useState(true)
  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center pt-10">
        {/* <div className="relative bg-gray-300 h-[580px] w-[550px]">
          <Header />
          <Meme />
        </div> */}
          {/* <EffectHook /> */}
        {/* Test forms */}
        {/* <Forms /> */}
        <div className="bg-amber-500 w-1/2 py-10 text-center text-white font-semibold">
          <button onClick={()=>setShow(prevShow=>!prevShow)} className="bg-white px-4 py-2 rounded-md text-amber-500">toggle window width</button>
          {show && <WindowTracker />}
        </div>
      </div>
     
    </div>
  );
}
