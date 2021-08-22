import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [idx, setIdx] = useState(0);
  const { index } = useParams();
  const recipe = recipes[index];
  const capitalize = (name) => {
    return name
      .split(" ")
      .map((str) =>
        str.length <= 2
          ? str
          : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      )
      .join(" ");
  };

  const createMarkup = () =>{
    return {__html: recipe?.summary};
  }
  
  const summary = <p dangerouslySetInnerHTML={createMarkup()}></p>;
  const ingredients = (
    <ul>
      {recipe?.nutrition?.ingredients.map((item) => {
        return <li>{capitalize(item.name)}</li>;
      })}
    </ul>
  );
  const instructions = (
    <ol>
      {recipe?.analyzedInstructions[0]?.steps.map((item) => {
        return <li>{item.step}</li>;
      })}
    </ol>
  );

  const nutrients = <ul>{recipe?.nutrition?.nutrients.map((item) => {
    return <li>{item.name}: {item.amount} {item.unit}</li>
  })}</ul>

  const sections = [summary, ingredients, instructions, nutrients];

  const handleClick = (e) => {
    setIdx(e.target.value);
  };

  useEffect(() => {
    async function getRecipes() {
      const diet = "Gluten Free";
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?number=7&apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&addRecipeNutrition=true&diet=${diet}`
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipes();
  }, []);

  return (
    <section>
      <h1>{recipe?.title} </h1>
      <img src={recipe?.image} alt="gluten-free-recipe" />
      <div className="buttons">
        <button value="0" onClick={handleClick}>
          Summary
        </button>
        <button value="1" onClick={handleClick}>
          Ingredients
        </button>
        <button value="2" onClick={handleClick}>
          Instructions
        </button>
        <button value="3" onClick={handleClick}>
          Nutrients
        </button>
      </div>
      <div>{sections[idx]}</div>
    </section>
  );
};

export default Recipes;
