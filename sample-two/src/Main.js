import React from "react"
import { useState } from "react"
export function Main(){
    let [count,setCount]=React.useState(0)
    function handleDec(){
        setCount(count=count-1)
        colorselector()
    }
    function handleInc(){
        setCount(count=count+1);
        colorselector()
    }
    function colorselector(){
        let countElement=document.getElementById("count");
        if(count> 0){
            countElement.style.color="green"
        }
        else if(count <0){
            countElement.style.color="red"
        }
        else{
            countElement.style.color="black"
        }
    }
    return (
        <div className="counter-app-body">
            <div className="counter-container">
                <h3>Counter Application</h3>
                <div className="counter-section">
                    <button className="icon" onClick={handleDec}><span className="dec">-</span></button>
                    <div className="count" id="count">{count}</div>
                    <button className="icon" onClick={handleInc}><span className="inc">+</span></button>
                </div>
                
            </div>
        </div>    
    )
}