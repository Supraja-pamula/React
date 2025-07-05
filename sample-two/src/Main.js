import React, { use } from 'react';
import emptyStar from './images/empty-star.png';
import fillStar from './images/fill-star.png';
import userImg from './images/user.png'
export function Main(){
    let [user,setUser]=React.useState({
        name:"Ajarpus",
        address:"Khammam",
        role:"UI Developer",
        isFavourite:false
    })
    function handleFavourite(){
        setUser((prevUser)=>{
            return {...prevUser,isFavourite:!prevUser.isFavourite}
        })
        console.log(user.isFavourite)
    }
    return <div className="student-card">
        <img src={userImg} className='userImg'/>
        <h2>Name:{user.name}</h2>
        <p>Address:{user.address}</p>
        <p>Role:{user.role}</p>
        <button className='star-btn' onClick={handleFavourite}><img src={user.isFavourite? fillStar:emptyStar} className='favourite-img'/></button>
    </div>
}