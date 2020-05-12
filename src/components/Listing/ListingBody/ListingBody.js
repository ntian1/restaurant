import React from "react";
import BusinessRating from "../../BusinessRating/BusinessRating";
import styles from "./ListingBody.module.css";

import CarouselComp from "../../CarouselComp/CarouselComp";
import { Link } from "react-router-dom";

const ListingBody = () => {
  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active ">
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#reserving">Book a Table</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles["listing-body"]}>
          <div id="overview">
            <div className={styles["align-row"]}>
              <h3>
                <BusinessRating />
              </h3>
              $$$
            </div>
            <p className="tags">
              Top tags :<span className="tag"> Pizza</span>
              <span className="tag">NYC</span>
              <span className="tag">Italian</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr />
          </div>

          <div id="reserving">
            <h3 className="title is-size-3">Book a Table</h3>
            <p>Party Size: 5 people</p>
            <p>Date: 17th may</p>
            <p>Time slots available:</p>
            <Link to="/reservepage">
              <div>
                <button class="button is-rounded">7.30pm</button>
                <button class="button is-rounded">8.30pm</button>
                <button class="button is-rounded">9.30pm</button>
              </div>
            </Link>
          </div>
          <div id="menu">
            <h3 className="title is-size-3">Menu</h3>
            <div>
              <div className={styles["carousel-size"]}>
                <CarouselComp />
              </div>
            </div>
            <hr />
          </div>
          <div id="photos">
            <h3 className="title is-size-3">Photos</h3>
            <div>
              <div className={styles["carousel-size"]}>
                <CarouselComp />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingBody;
