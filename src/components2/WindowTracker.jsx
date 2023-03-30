import React from 'react'

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(()=>{
    const watchWidth = ()=>setWindowWidth(window.innerWidth)
    window.addEventListener('resize', watchWidth)
    return ()=>{  //cleanup function. removes event listener when element lifecyle ends (only then)
      window.removeEventListener('resize', watchWidth)
    }
  }, [])

  return (
    <h1 className="textxl">Window with: {windowWidth}</h1>
  )
}