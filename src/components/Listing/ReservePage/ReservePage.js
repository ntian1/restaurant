import React from "react";
import NavBar from "../../NavBar/NavBar";
import styles from "./ReservePage.module.css";
import { Link } from "react-router-dom";

const ReservePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div className={styles.body}> You're Almost done!</div>
        <div className={`card is-center ${styles["reserve-page-card"]}`}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image ">
                  <img
                    src="https://via.placeholder.com/210"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-3">Pizza Palace</p>

                <p>
                  <span className="icon">
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  Tues,May 19
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-clock"></i>
                  </span>
                  7.30pm
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-user-friends"></i>
                  </span>
                  2 people
                </p>
              </div>
            </div>
            
          </div>

          <div className="control">
            <Link to="/reservecomplete">
              <button className="button is-link is-center">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservePage;
