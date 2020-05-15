//Results Summary component on the /search Page.
//Using the filters the user should be able to narrow the search to more specific results like filtering by cuisine, price range.

import React from "react";
import styles from "./ResultsSummary.module.css";

const ResultsSummary = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["results-summary"]}>
        <h1 className="subtitle">
          Showing Restaurants near<strong> {props.location}</strong>
        </h1>
        {/* 
            Should return the total number of results related to this search query.
            Replace with hardcorded value
            */}
        <p> Showing 1-5 out of 50 results </p>
      </div>
      {/* 
        
        Filter results component
        */}
      <div className={styles.filters}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All Filters</span>
        </button>
        {/* 
                Returns the value to filter by the button value.
                stored as string 
                */}
        <div className="buttons has-addons">
          <button className="button">$$</button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>
        </div>
        {/* 
                Returns the valye to filter by cuisine value.
                gets data from the database about the cuisine types.
                Replace the hardcorded 'Item 1,2,3' with values from the DB.
                */}
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span className="icon">
                <i className="fas fa-utensils"></i>
              </span>
              <span>Cuisines</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>

          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <p>American</p>
              </div>
              <div className="dropdown-item">
                <p>Italian</p>
              </div>
              <div className="dropdown-item">
                <p>Mexican</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultsSummary;
