import React, { useState, useEffect } from 'react';
import './ChildCard.css';
import timestamp from 'time-stamp';
import { checkIn, checkOut } from '../helpers/api';

export default function ChildCard({name, id, checkedIn, lastCheckedIn, image, getChildren}) {
    const [isCheckedIn, setIsCheckedIn] = useState(checkedIn);
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsCheckedIn(!isCheckedIn)
        if (isCheckedIn) {
            checkOut(setIsCheckedIn, id)
        }
        else {
            setTime(timestamp.utc('HH:mm'));
            checkIn(setIsCheckedIn, id, time)
        }
    }

    return (
        <div className="child-card">
            <div className="profile-picture">
                <img src={image} alt="user avatar" />
            </div>
            <div className="details">
                <h2>{name}</h2>
            </div>
            <div className="check-in-out">
                {isCheckedIn &&
                    <button className="check-out" onClick={e => handleSubmit(e)}>Check Out</button>
                }
                {!isCheckedIn &&
                    <button className="check-in" onClick={e => handleSubmit(e)}>Check In</button>
                }                
            </div>
        </div>
    )
}
