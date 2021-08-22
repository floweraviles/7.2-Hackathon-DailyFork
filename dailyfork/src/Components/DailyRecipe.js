import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DailyRecipe = () => {
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
      <div>
        <Link to="/recipe/0">
          <h1>Title: {recipes[0]?.title}</h1>
          <img src={recipes[0]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/1">
          <h1>Title: {recipes[1]?.title}</h1>
          <img src={recipes[1]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/2">
          <h1>Title: {recipes[2]?.title}</h1>
          <img src={recipes[2]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/3">
          <h1>Title: {recipes[3]?.title}</h1>
          <img src={recipes[3]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/4">
          <h1>Title: {recipes[4]?.title}</h1>
          <img src={recipes[4]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/5">
          <h1>Title: {recipes[5]?.title}</h1>
          <img src={recipes[5]?.image} />
        </Link>
      </div>
      <div>
        <Link to="/recipe/6">
          <h1>Title: {recipes[6]?.title}</h1>
          <img src={recipes[6]?.image} />
        </Link>
      </div>

    </div>
  );
};

export default DailyRecipe;
