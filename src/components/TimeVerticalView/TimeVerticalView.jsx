import React from 'react';
import "./TimeVerticalView.css"

const TimeVerticalView = () => {
    // Генерация массива времени (часы)
    const hours = Array.from({ length: 24 }, (_, index) => index);

    return (
        <div className="time-vertical-view">
            {hours.map(hour => (
                <div key={hour} className="time-slot">
                    <span>{`${hour < 10 ? '0' + hour : hour}:00`}</span>
                </div>
            ))}
        </div>
    );
};

export default TimeVerticalView;