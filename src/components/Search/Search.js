import React from 'react';
import NavBar from '../NavBar/NavrBar';
import ResultsSummary from './ResultsSummary/ResultsSummary';
import SearchResults from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';

const Search = () => {

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    // const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    return(
        <div>
            <NavBar 
                    location={locationParam}/>
            <ResultsSummary 
                            location={locationParam}/>
            <SearchResults  />
        </div>
    );
};
export default Search;