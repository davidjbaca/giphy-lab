import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from "./Form/Form";
import GifImg from './gifImg/gifImg';

function App() {
  const [giphy, setGiphy] = useState("");

  useEffect(()=> {
    console.log("use Effect Working")
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=G9fK5jNPNHQnqP6L6FBPfv3FmEaeSAJV`;

    async function makeApiCall(){
      try{
        const responseJson = await fetch(gifUrl);
        console.log(responseJson)
        const data = await responseJson.json()
        console.log(data)
        console.log(data.data, 'DATA.DATA')
        
        setGiphy(data.data.images.original)
      } catch(err){
        console.log(err)
      }
    }

    makeApiCall()

  }, [])
  

  return (
    <div className="App">
      <h1>Gif fun!</h1>
      <Form liftGiphy />
      <GifImg gifData={giphy}/>
    </div>
  )
}

//api key G9fK5jNPNHQnqP6L6FBPfv3FmEaeSAJV

export default App 