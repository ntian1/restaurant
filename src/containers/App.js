import React, { Component } from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import Search from "../components/Search/Search";
import Listing from "../components/Listing/Listing";
import ReservationComplete from "../components/Listing/ReservationComplete/ReservationComplete";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import ReservePage from "../components/Listing/ReservePage/ReservePage";
import Restaurant from "../components/Restaurant/Restaurant";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/listing" component={Listing} />
        <Route path="/reservecomplete" component={ReservationComplete} />
        <Route path="/reservepage" component={ReservePage} />
        <Route path="/accountinfo" component={AccountInfo} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
