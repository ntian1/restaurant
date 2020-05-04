import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import DatePicker from 'react-date-picker';

const SearchBar = (props) => {

    
    const [location, setLocation] = useState(props.location || '');
  //const [selectedDate,setSelectedDate] = useState(props.selectedDate || '');

    const formSubmit =(e)=> {

        if(typeof props.search === 'function') {
            props.search(location);
        }
        
        e.preventDefault();
    };
   
    
    const sizeClass = props.small ? '' : 'is-medium';
    return (
    <form onSubmit={formSubmit}>
        <div className="field has-addons">
            <p className="control">
                <button className={`button is-static ${sizeClass}`}>People</button>
            </p>
            <div className="dropdown is-hoverable">
            <div className="control">
                    <div className={`button ${sizeClass} ${styles['dropdown-control']}`} aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Select</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </div>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                    <div className="dropdown-item">
                        <p>2 People</p>
                    </div>
                    <div className="dropdown-item">
                        <p>3 People</p>
                    </div>
                    <div className="dropdown-item">
                        <p>4 People</p>
                    </div>
                    <div className="dropdown-item">
                        <p>5 People</p>
                    </div>
                    <div className="dropdown-item">
                        <p>6 People</p>
                    </div>
                    <div className="dropdown-item">
                        <p>7 People</p>
                    </div>
                    </div>
                </div>
                </div>

            <div className="control">
                <div className={`button is-static ${sizeClass}`}>Date</div>
            </div>
            <div className="control">
                <div className={`button is-static ${sizeClass}`}>Date-Picker placeholder</div>
            </div>
            {/* DATE - PICKER  */}
            {/* <div className="control">
                <DatePicker 
                minDate  = {new Date()}
               
                />
            </div> */}
            <div className="control">
                <div className={`button is-static ${sizeClass}`}>Near</div>
            </div>
            <p className="control">
                <input className={`input ${sizeClass} ${styles['input-control']}`}
                type="text" 
                value={location}
                onChange = {(e) => {setLocation(e.target.value)}}
                placeholder="Where"/>
            </p>
            <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={formSubmit} >
                <span className={`icon is-small ${styles['search-icon']}`}>
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    </form>
    );
};

export default SearchBar;