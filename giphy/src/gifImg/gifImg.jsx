import React from "react";

function gifImg({gifData}){
    return (
        
        <div className="imgData">
        <img src= {gifData.url} alt="" ></img>
        
        </div>
    )
}
export default gifImg