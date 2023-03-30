import React from 'react'


export default function EffectHook() {
  const [starWarsData, setStarWarsData] = React.useState({})
  console.log('rendered')
  const [count, setCount] = React.useState(1);
  
  React.useEffect(()=>{
    console.log('effect ran')
    fetch(`http://swapi.dev/api/people/${count}`)
      .then(response=>response.json())
      .then(data=>setStarWarsData(data))
  }, [count])

  return (
    <div>
      <button type='button' onClick={()=>setCount(prevCount=>prevCount+1)} className="bg-zinc-400 px-4 py-2">Add</button>
      <p>value of count: {count}</p>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}