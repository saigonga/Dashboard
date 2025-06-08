import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

function Calendar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [events, setEvents] = useState([
        {
            title: 'Team Meeting',
            date: '2025-06-20',
            backgroundColor: '#0066ff',
        },
        {
            title: 'Project Deadline',
            date: '2024-03-25',
            backgroundColor: '#ff3d00',
        },
        {
            title: 'Client Call',
            date: '2024-03-22',
            backgroundColor: '#00c853',
        },
    ]);

    const handleAddEvent = () => {
        if (eventTitle && selectedDate) {
            const newEvent = {
                title: eventTitle,
                date: selectedDate,
                backgroundColor: '#0066ff',
            };
            setEvents([...events, newEvent]);
            setEventTitle('');
            setSelectedDate('');
            setIsModalOpen(false);
        }
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h3>Calendar</h3>
                <div className="calendar-actions">
                    <button className="calendar-btn" onClick={() => setIsModalOpen(true)}>Add Event</button>
                </div>
            </div>
            <div className="calendar-wrapper">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    }}
                    height="auto"
                />
            </div>

            {/* Event Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Add New Event</h3>
                            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Event Title</label>
                                <input
                                    type="text"
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    placeholder="Enter event title"
                                />
                            </div>
                            <div className="form-group">
                                <label>Event Date</label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="btn-save" onClick={handleAddEvent}>Save Event</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar; 