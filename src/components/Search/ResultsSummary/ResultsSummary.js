import React from 'react';
import styles from './ResultsSummary.module.css';

const ResultsSummary = (props) => {
    
    return(
        <div className={styles.container}> 
         <div className={styles['results-summary']}>
            <h1 className="subtitle">Showing Restaurants near<strong> {props.location}</strong></h1>
            <p> Showing 1-5 out of 50 results </p>
        </div>
        <div className={styles.filters}>
                <button className="button">
                    <span className="icon"><i className="fas fa-sliders-h"></i></span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>
                <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span className="icon"><i className="fas fa-utensils"></i></span>
                    <span>Cuisines</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                    <div className="dropdown-item">
                        <p>Item 1</p>
                    </div>
                    <div className="dropdown-item">
                        <p>Item 2</p>
                    </div>
                    <div className="dropdown-item">
                        <p>Item 3</p>
                    </div>
                    </div>
                </div>
                </div>   
                <button className="button">
                    <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                    <span>Cashback</span>
                </button>
        </div>
        </div>
    );
};
export default ResultsSummary;