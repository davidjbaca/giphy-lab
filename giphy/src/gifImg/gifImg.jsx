import React from "react";

export default function GifImg({gifData}){
    console.log(gifData)
    
    return (
        
        <div className="imgData">
            <img src={gifData.url} alt="" ></img>
        
        </div>
    )
}
