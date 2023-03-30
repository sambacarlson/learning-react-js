import React from "react";
import boxes from '../boxes';
import Box from "./Box";


export default function Body2(props) {
  const [square, setSquare] = React.useState(boxes)
  // const [on, setOn] = React.useState(true)
  function toggle(id) {
    setSquare(prevSquare=>prevSquare.map(item=>{
      return item.id===id? {...item, on: !item.on} : item
    }))
  }
  // function toggle(id) {
  //   setSquare(prevSquare=>{
  //     const newSquares = []
  //     for(let i=0; i<prevSquare.length; i++) {
  //       const currentSquare = prevSquare[i]
  //       if(currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on
  //         }
  //         newSquares.push(updatedSquare)
  //       }
  //       else {
  //         newSquares.push(currentSquare)
  //       }
  //     }
  //     return newSquares
  //   })
  // }
  
  const squareElement = square.map(square => (
  <Box 
    key={square.id} //We don't have access to key. it actually not a prop.
    on={square.on} 
    toggle={()=>toggle(square.id)} 
  />
  ))
  
  return (
    <div>
      <h1 className="text-6xl font-bold text-slate-600">
        Welcome back {props.currentUser}!
      </h1>
      <div className="grid grid-cols-3 md:w-1/3">
        {squareElement}
      </div>
    </div>
  )
}