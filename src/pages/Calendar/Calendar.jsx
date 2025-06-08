import React from 'react';
import Calendar from '../../components/Calendar/Calendar'; 
const CalendarPage = () => {
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h1>Event Calendar</h1>
            </div>
            <Calendar /> 
        </div>
    );
};

export default CalendarPage;