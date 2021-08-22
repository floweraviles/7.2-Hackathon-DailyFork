import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const diet = "Gluten Free";
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?number=7&apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true&addRecipeNutrition=true&diet=${diet}`
        );
        console.log(response.data.results);
        setRecipes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipes();
  }, []);

  return (
    <div>
      <h1>Title: {recipes[3]?.title} </h1>
      <img src={recipes[3]?.image} />
      <ol>
        {recipes[3]?.analyzedInstructions[3]?.steps.map((item) => {
          return <li>{item.step}</li>;
        })}
      </ol>
      <ul>
        {recipes[3]?.nutrition?.ingredients.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <h3>
        {recipes[3]?.summary}
      </h3>
    </div>
  );
};

export default Recipes;