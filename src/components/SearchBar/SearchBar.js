import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const SearchBar = (props) => {
  const [people, setPeople] = useState(props.people || "");
  const [date, setDate] = useState(props.date || new Date());
  const [location, setLocation] = useState(props.location || "");
  const handleChange = (date) => setDate(date);
  const formSubmit = (e) => {
    const newDate = date.toDateString();
    if (typeof props.search === "function") {
      props.search(people, newDate, location);
    }
    e.preventDefault();
  };

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={formSubmit}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>People</button>
        </p>

        <div className="control">
          <div className={`select ${sizeClass}`}>
            <select
              value={people}
              onChange={(e) => {
                setPeople(e.target.value);
              }}
            >
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5 People</option>
              <option>6 People</option>
              <option>7 People</option>
              <option>8 People</option>
              <option>9 People</option>
            </select>
          </div>
        </div>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>Date</div>
        </div>
        <div className="control">
          <div className={`button ${sizeClass} `}>
            <DatePicker
              value={date}
              selected={date}
              minDate={moment().toDate()}
              dateFormat="MMMM d, yyyy"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>Near</div>
        </div>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Where"
          />
        </p>
        <div
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={formSubmit}
        >
          <span className={`icon is-small ${styles["search-icon"]}`}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
