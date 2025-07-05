import React from "react"

export function Joke(props){
      console.log(props)
    let [needToShow,setNeedToShow]=React.useState(false)
    function handleShowBtn(){
        setNeedToShow(!needToShow);
        console.log(needToShow  );
      
    }
   return (
    <div>
        <p>{props.setup}</p>
        {needToShow ? <div>
            <p>{props.punchline}</p>
            <p>{props.jokesCount}: JokesCount</p>
            <p>{props.isFunny ? "This joke is funny!" : "This joke is not funny."}</p>
            <ul>{props.comments.map((comment)=><li key={comment.id}>{comment.text}</li>)}</ul>
        </div> : null}
        
        <button onClick={handleShowBtn}>{needToShow?"Hide" : "Show"} Details</button>
        <hr/> 
    </div>
   )
}