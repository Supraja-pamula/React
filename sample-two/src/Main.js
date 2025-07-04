import React from "react"
import { useState } from "react"

export function Main() {
    const [isGoingOut, setIsGoingOut] = React.useState(true);
    function handleMind() {
        // setIsGoingOut(!isGoingOut)
        setIsGoingOut(prev => !prev)
    }
    return (
        <div className="toggle-app-sec">
            <div className="toggling-container">
                <h1>Do I feel like going outside?</h1>
                <button className="decisionEl" onClick={handleMind}>{isGoingOut ? "Yes" : "No"}</button>
            </div>
        </div>
    )
}