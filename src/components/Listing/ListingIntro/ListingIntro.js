import React from "react";
import styles from "./ListingIntro.module.css";

const ListingIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles["listing-summary"]}>
        <h1 className="title is-size-2">Pizza Palace</h1>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-utensils"></i>
          </span>
          Italian
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-map-pin"></i>
          </span>
          New York
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-hourglass"></i>
          </span>
          12pm to 12 am (Mon-Fri)
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className=""></i>
          </span>
          12pm to 12 am (Sat-Sun)
        </p>
      </div>
    </div>
  );
};

export default ListingIntro;
