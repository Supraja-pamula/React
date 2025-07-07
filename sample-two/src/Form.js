import React from "react";

export function Form() {
    let [ingredient, setIngredient] = React.useState([])
    // function handleSubmit(event){
    //     event.preventDefault()
    //     let ingredientInput=document.getElementById("ingredientInput").value;
    //     setIngredient([...ingredient,ingredientInput]);
    //     console.log("Ingredient",ingredient)
    // }

    function getIngredients(formData) {
        let ingredientName = formData.get("ingredient");
        if (ingredientName !== "") {
         setIngredient(prevIngredient => [...prevIngredient, ingredientName]);
        }
        
    }

    return (
        <form action={getIngredients}>
            {/* <form  onSubmit={handleSubmit}> */}
            <div className="form-section">
                <input type="text" placeholder="e.g. Origano" className="inputElement" id="ingredientInput" name="ingredient" />
                <button className="addIngredients-btn">Add Ingredient</button>
            </div>
            {ingredient.length>0 ? <section>
                <h2>Ingredients on hand:</h2>
                <div className="ingredients-list">
                    <ul>
                        {ingredient.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                {ingredient.length >3 ? <div className="readyForRecipeSection">
                    <div className="readyForRecipe">
                        <div>
                            <h4>Ready for a recipe?</h4>
                            <p>Generate a recipe from your list of Ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>

                </div> :null}
                
            </section> : null}

        </form>
    )
}