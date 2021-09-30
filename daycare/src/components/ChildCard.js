import React from 'react';
import './ChildCard.css';

export default function ChildCard({name, id, lastCheckedIn, image}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${name}: ${id}`)
    }

    return (
        <div className="child-card">
            <div className="profile-picture">
                <img src={image} alt="user avatar" />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <h5>{lastCheckedIn}</h5>
            </div>
            <div className="check-in-out">

                    <button className="check-out" onClick={e => handleSubmit(e)}>Check Out</button>
                
               
                    <button className="check-in" onClick={e => handleSubmit(e)}>Check In</button>
                
            </div>
        </div>
    )
}
