// Individual search result 
// return one single result on the /search page.
// Hardcoded values  -> replace by values from db.

import React from "react";
import styles from "./SearchResult.module.css";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import { Link } from "react-router-dom";
const SearchResult = (props) => {
  return (
    <div className={styles["search-result"]}>
      <img
        src="https://via.placeholder.com/210"
        alt="business"
        className={styles["restaurant-image"]}
      />
      {/* 
      
      On clicking the link it will take it to the individual restaurant detail page. 
      
      */}
      <div className={styles["restaurant-info"]}>
        <Link to="/listing">
          <u>
            {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Name'.
            
            */}
            <h2 className="subtitle">Pizza Place</h2>
          </u>
        </Link>
            {/* 
            gets the business rating depending upon the number of reviews users have submitted. 
            Could get complicated as will have to create a reviews component then on each page
            // Probably Could remove component
            
            */}
        <BusinessRating />
        <p>
            {/* 
            
            resturant owner posts this as string when giving restaurant info on /restaurant
            get string request from db for 'Restaurant Pricing'.
            
            */}
          $$
          {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant.

            get string request from db for 'Restaurant Pricing '.
            retrieves all the tags the restaurant owner has specified
            limit of 5.
            
          
          */}
          <span className="tag">Pizza</span> <span className="tag">NYC</span>
        </p>
      </div>
      <div className={styles["restaurant-next"]}>
            {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant.

            get string request from db for 'Restaurant street address','Restaurant City ', 'Restaurant State ', 'Restaurant phone number'.
            retrieves all the tags the restaurant owner has specified
            limit of 5.
            
          
          */}
        <p>1 castle rock, </p>
        <p>Hoboken, NJ </p>
        <p>8767746656</p>
      </div>
    </div>
  );
};
export default SearchResult;
