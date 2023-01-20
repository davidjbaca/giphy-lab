import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from "./Form/Form";
import GifImg from './gifImg/gifImg';

function App() {
  const [giphy, setGiphy] = useState("");
  const [img, setImg] = useState("the rock");

  useEffect(()=> {
    console.log("use Effect Working")
    const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9fK5jNPNHQnqP6L6FBPfv3FmEaeSAJV&q=${img}&limit=25&offset=0&rating=r&lang=en`;

    const random = Math.floor(Math.random() * 25) +1;
    async function makeApiCall(){
      try{
        const responseJson = await fetch(gifUrl);
        console.log(responseJson)
        const data = await responseJson.json()
        console.log(data)
        console.log(data.data, 'should be the object')
        
        setGiphy(data.data[random].images.original)
      } catch(err){
        console.log(err)
      }
    }

    makeApiCall()

  }, [img]);

  function liftGiphy(img){
    console.log(img);
    setImg(img)
  }
  

  return (
    <div className="App">
      <h1>Gif fun!</h1>
      <Form liftGiphy={liftGiphy} />
      <GifImg gifData={giphy}/>
    </div>
  )
}

//api key G9fK5jNPNHQnqP6L6FBPfv3FmEaeSAJV

export default App 