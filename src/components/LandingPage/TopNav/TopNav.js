import React from 'react';
import styles from './TopNav.module.css';

const TopNav = () => {
    return(
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Are you a restaurant?</span>
                <span>Y</span>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign out</button>
            </div>
        </div>
    );
};

export default TopNav;