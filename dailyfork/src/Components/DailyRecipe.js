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
    <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{clickable: true}}>
      <SwiperSlide>
        <Link to="/recipe/0">
          <h2>{recipes[0]?.title}</h2>
          <img src={recipes[0]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/1">
          <h2>{recipes[1]?.title}</h2>
          <img src={recipes[1]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/2">
          <h2>{recipes[2]?.title}</h2>
          <img src={recipes[2]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/3">
          <h2>{recipes[3]?.title}</h2>
          <img src={recipes[3]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/4">
          <h2>{recipes[4]?.title}</h2>
          <img src={recipes[4]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/5">
          <h2>{recipes[5]?.title}</h2>
          <img src={recipes[5]?.image} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/recipe/6">
          <h2>{recipes[6]?.title}</h2>
          <img src={recipes[6]?.image} />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default DailyRecipe;
