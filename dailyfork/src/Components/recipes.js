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
    <section>
        <Link to="/">
        <button>
            Back 
        </button>
        </Link>
      <h1>Title: {recipes[0]?.title} </h1>
      <img src={recipes[0]?.image} />
      <ol>
        {recipes[0]?.analyzedInstructions[0]?.steps.map((item) => {
          return <li>{item.step}</li>;
        })}
      </ol>
      <ul>
        {recipes[0]?.nutrition?.ingredients.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <h3>
        {recipes[0]?.summary}
      </h3>
    </section>
  );
};

export default Recipes;
