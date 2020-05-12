import React from "react";
import NavBar from "../NavBar/NavBar";
import ResultsSummary from "./ResultsSummary/ResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import useReactRouter from "use-react-router";

const Search = () => {
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
    
  const peopleParam = params.get("find_peop");
  const dateParam = params.get("find_date");
  const locationParam = params.get("find_loc");
    console.log('This is search module' +peopleParam, dateParam, locationParam);
  return (
    <div>
      <NavBar people={peopleParam} date={dateParam} location={locationParam} />
      <ResultsSummary location={locationParam} />
      <SearchResults people={peopleParam} date={dateParam} location={locationParam} />
    </div>
  );
};
export default Search;
 