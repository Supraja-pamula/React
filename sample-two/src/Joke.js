export function Joke(props){
   return (
    <div>
        <p>{props.setup}</p>
        <p>{props.punchline}</p>
        <p>{props.jokesCount}: JokesCount</p>
        <p>{props.isFunny ? "This joke is funny!" : "This joke is not funny."}</p>
        <p>{props.comments.forEach((comment)=> <span key={comment.id}>{}</span>)}</p>
        <hr/>
    </div>
   )
}