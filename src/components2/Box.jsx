import React from "react";


export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#d5fb95' : '#ffffff'
  }
  return (
    <div className="m-2 p-4 ring-1 w-24 h-24 rounded-md col-span-1 gap-4" style={styles} onClick={props.toggle}></div>
  )
}

