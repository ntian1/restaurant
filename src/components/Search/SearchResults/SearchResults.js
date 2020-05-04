import React from 'react';
import styles from './SearchResults.module.css';
import SearchResult from './SearchResult/SearchResult';

const SearchResults = (props) => {    

    return(
        <div className={styles['search-results']}>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
        </div>
    );
};
export default SearchResults;