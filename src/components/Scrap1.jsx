// get props from an object
import React from "react"
import Star from "./Star"

export default function Scrap1() {
  const [state, setState] = React.useState({
    name: 'Carlson',
    contact: 677964952,
    email: 'sambacarlson@gmail.com',
    isfavorite: false
  })
  return (
    <div className="m-10 p-3 ring-1">
      <img src="assets/KathrynKuhlman.jpg" alt="Kuhlman" />
      <div className="hover:cursor-pointer">
        <Star isfilled={state.isfavorite} handleClick={toggleFavorite}/>
      </div>
      <p>name: {state.name}</p>
      <p>contact: {state.contact}</p>
      <p>email: {state.email}</p>
    </div>
  )
  function toggleFavorite() {
    setState(prevState => ({...prevState, isfavorite: !prevState.isfavorite}))
  }
}