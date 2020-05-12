import React from "react";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} className={styles["logo"]} alt="belb logo" />
      </Link>
      <SearchBar
        small
        people={props.people}
        date={props.date}
        location={props.location}
      />
      <button className={`button ${styles["nav-button"]}`}>Sign In</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button>
    </div>
  );
};
export default NavBar;
