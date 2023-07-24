import React from "react";
import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css"
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>khana</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="a table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
