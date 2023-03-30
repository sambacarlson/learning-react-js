import React from "react"

export default function Header(props) {
 return (
  <div className="bg-slate-400 text-white">
    <h3 className="text-4xl font-bold">
      current user: {props.currentUser}
    </h3>
  </div>
 )
}