import {useState} from "react";

export default function Form({liftGiphy}) {
    const [gif, setGif ] = useState("");
  
    function handleChange(e){
      setGif(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault() // stops our form from making an api call, we want to use our fetch, no page reloads
      liftGiphy(title)
    }

return (
    <form>
        <label> The Gif </label>
        <input type="text" name='title' placeholder="Get your Gif"
        onChange={handleChange}
        value={gif}
        />
        
        <button type="Submit">New Random Gif!</button>



    </form>


);
}