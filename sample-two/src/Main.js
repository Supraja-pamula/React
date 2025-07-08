import { Pad } from "./Pad"
export function Main(props){
    console.log(props)
    let boxEl=props.data.map((box)=>{
        return <Pad box={box}/>
    })
    
    return <div className="main-content">
        <h1>Fun facts about React!</h1>
        <div className="boxes-container">
            {boxEl}
        </div>
    </div>
}