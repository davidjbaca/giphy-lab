import {useState} from "react";

export default function Form({liftGiphy}) {
    const [gif, setGif ] = useState("");
  
    function handleChange(e){
      setGif(e.target.value);
    }
  
    function handleSubmit(e){
      e.preventDefault();
      liftGiphy(gif);
    }

return (
    <form onSubmit={handleSubmit}>
        <label> The Gif </label>
        <input type="text" 
        name='title' 
        placeholder="Search Library"
        onChange={handleChange}
        value={gif}
        />

        <button type="Submit">New Random Gif!</button>



    </form>


);
}