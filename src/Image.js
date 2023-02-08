import React from "react";
import './App.css'

export default function Image (props){
    return(
    <div className="gallery">
        {
            props.mydata.image.map((item,index)=><img src= {item} alt="studioghibli" width="600" height="400"></img>)
        }
    </div>
    )
}