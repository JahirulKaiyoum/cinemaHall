import React, { useState } from 'react';
import AvailableShow from '../AvailableShow/AvailableShow';
import Calender from '../Calender/Calender';



const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate);
    }
    return (
        <section>
        <div className='container'>
                <Calender handleDateChange={handleDateChange} ></Calender>
                <AvailableShow  selectedDate={selectedDate}></AvailableShow>

            </div>
        </section>
        
    );
};

export default Booking;