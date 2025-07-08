import React, { use } from 'react';
import { Star } from './Star';

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
    return (
        <Star userDetails={user} handleFavourite={handleFavourite}/>
    )
}