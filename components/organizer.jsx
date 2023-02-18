import React from "react";

const Organizer = ({ image, name, role }) => {
    return (
        <div className="organizer" data-tilt>
            <img src={image} alt={name} />
            <span>
                <h2>{name}</h2>
                <p>{role}</p>
            </span>
        </div>
    )
}

export default Organizer;