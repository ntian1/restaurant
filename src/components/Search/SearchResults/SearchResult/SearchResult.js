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
      <div className={styles["restaurant-info"]}>
        <Link to="/listing">
          <u>
            <h2 className="subtitle">Pizza Place</h2>
          </u>
        </Link>
        <BusinessRating />
        <p>
          $$
          <span className="tag">Pizza</span> <span className="tag">NYC</span>
        </p>
      </div>
      <div className={styles["restaurant-next"]}>
        <p>8767746656</p>
        <p>1 castle rock, </p>
        <p>Hoboken, NYC </p>
      </div>
    </div>
  );
};
export default SearchResult;
