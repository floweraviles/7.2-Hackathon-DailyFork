import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [idx, setIdx] = useState(0);
  const { index } = useParams();
  const recipe = recipes[index];
  const summary = <h3>{recipe?.summary}</h3>;
  const ingredients = (
    <ul>
      {recipe?.nutrition?.ingredients.map((item) => {
        return <li>{item.name}</li>;
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

  const sections = [summary, ingredients, instructions];

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
      <div>
        <button value="0" onClick={handleClick}>
          Summary
        </button>
        <button value="1" onClick={handleClick}>
          Ingredients
        </button>
        <button value="2" onClick={handleClick}>
          Instructions
        </button>
      </div>
      <div>{sections[idx]}</div>
    </section>
  );
};

export default Recipes;
