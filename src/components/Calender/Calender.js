import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = ({handleDateChange}) => {
    return (
        <div className='row'>
            <div classNamec="col-md-6">
                <h1>Select our Day</h1>
            </div>
            <div classNamec="col-md-6">
            <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
            </div>

        </div>
        
    );
};

export default Calender;