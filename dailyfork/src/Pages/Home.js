import React from "react";
import DailyRecipe from "../Components/DailyRecipe";
import "../Styles/Home.css"

function Home() {
  return (
    <section className="Home">
      <h1>Meal of the Day</h1>
      <DailyRecipe />
    </section>
  );
}

export default Home;
