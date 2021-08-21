import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
require("dotenv").config();

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
   
  
    
    useEffect( () => {
        const fetchRecipes = async () => {
          try {
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=7&apiKey=${process.env.API_KEY}&addRecipeInformation=true&addRecipeNutrition=true&diet=Gluten Free`);
            debugger
            setRecipes(res.data.items);
          } catch (err) {
            setRecipes([]);
          };
        };
        fetchRecipes()
    }, [])
}

export default Recipes;

