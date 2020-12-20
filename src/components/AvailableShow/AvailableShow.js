import React from 'react';

const AvailableShow = ({selectedDate}) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1>Availabe show on {selectedDate.toDateString()}</h1>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </section>
    );
};

export default AvailableShow;