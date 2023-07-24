import React from "react";
import MealsImage from "../../assets/Meals.jpeg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>khana</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="a table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
