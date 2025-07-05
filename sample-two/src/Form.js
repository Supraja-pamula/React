import React from "react";

export function Form(){
    let[ingredient,setIngredient]=React.useState([])
    // function handleSubmit(event){
    //     event.preventDefault()
    //     let ingredientInput=document.getElementById("ingredientInput").value;
    //     setIngredient([...ingredient,ingredientInput]);
    //     console.log("Ingredient",ingredient)
    // }

    function getIngredients(formData){
        let ingredientName=formData.get("ingredient");
        setIngredient(prevIngredient => [...prevIngredient,ingredientName])
    }
  
    return(
        <form action={getIngredients}>
        {/* <form  onSubmit={handleSubmit}> */}
            <div className="form-section">
               <input type="text" placeholder="e.g. Origano" className="inputElement" id="ingredientInput" name="ingredient"/>
               <button className="addIngredients-btn">Add Ingredient</button>
            </div>
            
            <div className="ingredients-list">
                <ul>
                    {ingredient.map((item,i)=><li key={i}>{item}</li>)}
                </ul>
            </div>
        </form>
    )
}