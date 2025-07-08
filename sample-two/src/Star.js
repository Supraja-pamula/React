
import fillStar from './images/fill-star.png';
import userImg from './images/user.png'
import emptyStar from './images/empty-star.png';
export function Star(props){
    console.log(props)
    return (
        <div className="student-card">
            <img src={userImg} className='userImg'/>
            <h2>Name:{props.userDetails.name}</h2>
            <p>Address:{props.userDetails.address}</p>
            <p>Role:{props.userDetails.role}</p>
            <button className='star-btn' onClick={props.handleFavourite}><img src={props.userDetails.isFavourite? fillStar:emptyStar} className='favourite-img'/></button>
        </div>
    )
}