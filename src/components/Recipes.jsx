import {useState} from "react";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,

}
const elvenGountletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGountletsRecipe, 11111111111111111)


const Recipes = ()=>{
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h2>Current recipe: </h2>
            <button onClick={()=>setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={()=>setRecipe(elvenGountletsRecipe)}>Elven Gauntlet Recipe</button>

            <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;