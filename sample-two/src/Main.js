import { Fragment } from "react/jsx-runtime"
export function Main(props){
  console.log(props)
    return (
      <div className="main-container">
         <div className="image-container">
           <img src={props.image} alt={props.title} />
         </div>
         <div className="text-container">
           <h2>{props.title}</h2>
           <p>{props.description}</p>
           <ul>
            {props.list.map((item, index)=><li key={index}>{item}</li>)}
           </ul>
           <a href={props.view} target="_blank" className="view-more">View More</a>
         </div>
      </div>
    )
        
}