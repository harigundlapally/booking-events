import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PaymentSuccess.css';

const PaymentSuccess = ({events, eventBookedDetails}) => {
    const history = useHistory();
    const { eventId } = useParams();
    const [eventData,setEventData] = useState({});

    useEffect(() => {
        if(events.length) {
            const eventInfo = events?.filter((ev) => ev.id === +eventId);
            setEventData(eventInfo[0]);
        } else {
            history.push('/events');
        }
    }, [events, eventId, history]);

    return (
        <main className="payment-success">
            <h1>Payment made successfully</h1>
            <section className="payment-success__details">
                <ul>
                    <li>
                        <div className="type">Name</div>
                        <div className="value">{eventBookedDetails.name}</div>
                    </li>
                    <li>
                        <div className="type">Email</div>
                        <div className="value">{eventBookedDetails.email}</div>
                    </li>
                    <li>
                        <div className="type">Mobile</div>
                        <div className="value">{eventBookedDetails.mobile}</div>
                    </li>
                    <li>
                        <div className="type">Event</div>
                        <div className="value">{eventData.title}</div>
                    </li>
                    <li>
                        <div className="type">No.of Seats</div>
                        <div className="value">{eventBookedDetails.seats}</div>
                    </li>
                    <li>
                        <div className="type">Attendees</div>
                        <div className="value">
                            {
                                eventBookedDetails.attendees?.map((att,index) => {
                                    return (
                                        <div key={`att-${index}`} className="attendee">
                                            <span>{index+1}.</span>
                                            <span>{att.name}</span>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
};

const mapStateToProps = (state) => ({
    eventBookedDetails: state.EventBookingReducer?.eventBooked,
    events: state.EventsDataReducer?.events,
});

export default connect(mapStateToProps, null)(PaymentSuccess);

PaymentSuccess.propTypes = {
    eventBookedDetails: PropTypes.object,
    events: PropTypes.array
};
