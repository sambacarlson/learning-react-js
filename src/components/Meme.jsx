import React from "react";
// import memesData from "../memesData";


export default function Meme() {
  // const [image, setImage] = useState('assets/angry-meme-transparent.png');
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    url: 'assets/angry-meme-transparent.png'
  })
  const [allMemes, setAllMemes] = React.useState([])

  const [memeText, setMemeText] = React.useState({
    topText: "Setting",
    bottomText: "Punchline"
  })

  const handleTextChange= (event) => {
    const { name, value } = event.target
    // console.log(`${name} ${value}`)
    setMemeText(prevState=>{
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  function updateImage() {
    setMeme(prevMeme => ({
      ...prevMeme,
      url: random_image(allMemes).url
    }))
  }

  React.useEffect(()=>{
    console.log('effect ran')
    fetch(`https://api.imgflip.com/get_memes`)
      .then(response=>response.json())
      .then(data=>{
        setAllMemes(data.data.memes)
      })
      // .then(data=>console.log(data.data.memes))
  }, [])

  return (
    <div className="flex flex-col space-y-6 items-center">
      <div className="w-full p-6 mt-6">
          <div className=" w-full flex flex-row justify-between space-x-6">
            <input type="text" name="topText" placeholder="top line" className="px-4 py-2 ring-2 ring-purple-800 rounded-md w-1/2" onChange={handleTextChange} />
            <input type="text" name="bottomText" placeholder="bottom line" className="px-4 py-2 ring-2 ring-purple-800 rounded-md w-1/2" onChange={handleTextChange} />
          </div>
          <button onClick = {updateImage} className=" w-full bg-purple-800 text-white flex items-center justify-center space-x-2 py-3 rounded-xl mt-4 hover:bg-purple-700 active:ring-2 active:ring-white duration-150">
            <span>Get a new meme image</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53l3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"/></svg>
          </button>
      </div>
      <div className="mx-auto w-[90%] h-[250px] bg-white relative">
        <p className="absolute top-2 w-full text-center font-bold text-white bg-black opacity-50 p-1 text-3xl">{memeText.topText}</p>
        <img src={meme.url} alt="Meme" className="w-full h-full object-contain"/>
        <p className="absolute bottom-2 w-full text-center font-bold text-black bg-white text- opacity-50 p-1 text-2xl">{memeText.bottomText}</p>
      </div>
    </div>
  )

  
}

function random_image(arr) {
  const len = arr.length;
  // const author_images = memesData.map(items=>{
  //   return (items.authorImg);
  // });
  let randIdx = Math.floor(Math.random()*len);
  return arr[randIdx];
}


