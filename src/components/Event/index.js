import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Event.css';

const Event = ({id, title, date, imagePath, ticketsAvailable}) => {
    return (
        <section className="event">
            <div className="event__image">
                <img src={`/images/${imagePath}`} alt="event image" />
            </div>
            <div className="event__details">
                <div className="event__description">
                    <div className="event__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="event__dateTickets">
                        <div className="date">{date}</div>
                        <div className="tickets-availability">Tickets Available: <span>{ticketsAvailable?? 'N/A'}</span></div>
                    </div>
                </div>
                <div className="event__action">
                    <Link to={`/event-booking/${id}`} className={`btn btn--orange-whitebg ${!ticketsAvailable ? 'btn--disabled' : ''}`}>
                        <img src={ticketsAvailable ? '/images/bookevent.svg' : '/images/soldoutevent.svg'} alt="book icon" />
                        <span>{ticketsAvailable ? 'Book Event' : 'SOLD OUT'}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Event;

Event.propTypes = {
    id: PropTypes.number, 
    title: PropTypes.string, 
    date: PropTypes.string, 
    imagePath: PropTypes.string, 
    ticketsAvailable: PropTypes.number
};