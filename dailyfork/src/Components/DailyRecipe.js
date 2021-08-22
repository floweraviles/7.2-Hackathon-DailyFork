import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {recipes.map((recipe, i) => {
        return (
          <SwiperSlide key={i}>
            <Link to={`/recipe/${i}`}>
              <h2>{recipe?.title}</h2>
              <img src={recipe?.image} alt="daily-fork-recipe" />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DailyRecipe;
