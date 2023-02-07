import React from "react";
import './App.css'

export default function Image (props){
    <div>
        {
            props.mydata.image.map((item,index)=><img src= {item} alt="studioghibli"></img>)
        }
    </div>
}