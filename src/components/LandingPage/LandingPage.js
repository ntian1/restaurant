import React from 'react';
import TopNav from './TopNav/TopNav';
import logo from '../../assets/logo.png';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import useReactRouter from 'use-react-router';

const LandingPage = () => {

    const {history} = useReactRouter();

    const search =(location) =>{
        
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_loc=${urlEncodedLocation}`);
    };

    return (
     <div className={styles.landing}>
        <div className={styles['search-area']}>
            <TopNav/>
            <img src={logo} className={styles.logo} alt='logo'/>
            <SearchBar
             search={search}
             />
        </div>
    </div>
    );
};

export default LandingPage;