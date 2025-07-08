import React from "react"

export function Pad(props){
    const[on,setOn]=React.useState(props.box.isOn)
    console.log("Props",props)
    let style={
        backgroundColor:props.box.bg
    }
    function changeBoolean(){
        setOn(prev => !prev);
        console.log("Status",on)
    }
    return(
        <div className="box" style={on?style:null} onClick={changeBoolean}></div>
    )
}