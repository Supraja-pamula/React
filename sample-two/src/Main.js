
export function Main(props){
  console.log(props)
    return (
      <div className="main-container">
         <div className="image-container">
           <img src={props.country.image} alt={props.country.title} />
         </div>
         <div className="text-container">
           <h2>{props.country.title}</h2>
           <p>{props.country.description}</p>
           <ul>
            {props.country.list.map((item, index)=><li key={index}>{item}</li>)}
           </ul>
           <a href={props.country.view} target="_blank" className="view-more">View More</a>
         </div>
      </div>
    )
        
}