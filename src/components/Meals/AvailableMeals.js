import React from "react";
import classes from "./AvailabelMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "samosa",
    description: "Take a bite, and feel the delight.",
    price: 30,
  },
  {
    id: "m2",
    name: "pani-puri",
    description: "Life is too short to say no to pani puri! ...",
    price: 40,
  },
  {
    id: "m3",
    name: "vada pav",
    description: "Take a delicious bite into Mumbai's iconic delight – Vada Pav!",
    price: 25,
  },
  {
    id: "m4",
    name: "aloo puri",
    description: "aloo puri - the ultimate street food experience.",
    price: 35,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
