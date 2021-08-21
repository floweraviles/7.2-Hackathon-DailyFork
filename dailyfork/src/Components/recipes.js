import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
require("dotenv").config();

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // const word = "Gluten Free"
        const res = axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?number=7&apiKey=${process.env.API_KEY}&addRecipeInformation=true&addRecipeNutrition=true`
        );
        // const res = axios.get(
        //   `https://api.spoonacular.com/recipes/complexSearch?number=7&apiKey=${process.env.API_KEY}&addRecipeInformation=true&addRecipeNutrition=true`
        // )
        res.then((response) => {
          console.log(response);
        });
        console.log(res);
        debugger;
        setRecipes(res.data.items);
      } catch (err) {
        setRecipes([]);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Title: {recipes}</h1>
    </div>
  );
};

export default Recipes;
