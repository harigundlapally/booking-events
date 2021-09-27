import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import { useHistory, useParams, Link } from "react-router-dom";
import { postEventBookingDataRequest } from '../../redux/actions/post_eventbooking_action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './EventBooking.css';

const EventBooking = (props) => {
    const history = useHistory();
    const { eventId } = useParams();
    const [selectedSeats,setSelectedSeats] = useState(0);
    const [eventBookingData,setEventBookingData] = useState({});
    const [eventData,setEventData] = useState({});
    const [modal, setModal] = useState(false);
    const [attendees, setAttendees] = useState([{ value: null }]);

    useEffect(() => {
        if(props.events.length) {
            const eventInfo = props.events?.filter((ev) => ev.id === +eventId);
            setEventData(eventInfo[0]);
        } else {
            history.push('/events');
        }
    }, [props.events, eventId, history]);

    useEffect(() => {
        if(props.eventBookStatus) {
            successPayment();
        }
    },[props.eventBookStatus]);
  
    const successPayment = () => {
        alert('Payment Successful');
        setTimeout(() => {
            setModal(false);
            history.push(`/payment-success/${eventId}`);
        }, 100);
    };

    const handleAddAttendees = () => {
      const values = [...attendees];
      values.push({ value: null });
      setAttendees(values);
    }
  
    const handleRemoveAttendees = (i) => {
      const values = [...attendees];
      values.splice(i, 1);
      setAttendees(values);
    }

    const checkSeatsAvailablilty = (seats) => seats <= eventData.ticketsAvailable;

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        setSelectedSeats(data.seats);
        setEventBookingData({...data});
        setModal(true);
    };
    
    const bookingSuccess = () => {
        props.postEventBookingData(eventBookingData);
    }

    const closeModal = () => {
        setModal(false);
    };

    return (
        <main className="eventBooking">
            <div className="eventBooking__wrapper">
                <div className="eventBooking__header">
                    <h1>{eventData.title}</h1>
                    <h2>{eventData.date}</h2>
                    <h3>Tickets Available: <span>{eventData.ticketsAvailable}</span></h3>
                </div>
                <div className="eventBooking__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="First name Last Name" name="name" {...register("name", {required: true, pattern: /^[a-zA-Z\s]*$/})} />
                            {errors.name && errors.name.type === "required" && (
                                <span role="alert" className="error-message">Please enter your name</span>
                            )}
                            {errors.name && errors.name.type === "pattern" && (
                                <span role="alert" className="error-message">Only letters and spaces are allowed</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" placeholder="username@domain.com" name="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                            {errors.email && errors.email.type === "required" && (
                                <span role="alert" className="error-message">Please enter your email</span>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <span role="alert" className="error-message">Invalid email</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input id="mobile" type="text" placeholder="+91 XXX XXX XXXX" name="mobile" {...register("mobile", {required: true, pattern: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/i })} />
                            {errors.mobile && errors.mobile.type === "required" && (
                                <span role="alert" className="error-message">Please enter your mobile</span>
                            )}
                            {errors.mobile && errors.mobile.type === "pattern" && (
                                <span role="alert" className="error-message">Invalid mobile number</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="seats">Seats</label>
                            <input id="seats" type="number" placeholder="1" name="seats" {...register("seats", {required: true, pattern: /^\d+$/, validate: checkSeatsAvailablilty })} max={eventData.ticketsAvailable}/>
                            {errors.seats && errors.seats.type === "required" && (
                                <span role="alert" className="error-message">Please enter number of seats</span>
                            )}
                            {errors.seats && errors.seats.type === "pattern" && (
                                <span role="alert" className="error-message">Only numers are allowed</span>
                            )}
                            {errors.seats && errors.seats.type === "validate" && (
                                <span role="alert" className="error-message">Number of seats selected is more than available seats</span>
                            )}
                        </div>
                        <div className="attendees">
                            <h4>Attendees</h4>
                            {
                                attendees?.map((attendee,index) => {
                                    const fieldName = `attendees[${index}]`;
                                    return(
                                        <div className="form-group form-group--inline" key={fieldName}>
                                            <label htmlFor={`attendee${index}`}>{index+1}</label>
                                            <input id={`attendee${index}`} type="text" placeholder="First name last Name" name={`attendees${index}name`} {...register(`attendees.${index}.name`, {required: true} )} />
                                            <span className="remove-attendee" onClick={() => handleRemoveAttendees(index)}>
                                                <img src="/images/plus.svg" alt="remove icon" />
                                            </span>
                                            {errors.attendees?.[index]?.name?.type === "required" && (
                                                <span role="alert" className="error-message">Please enter the name of Attendee #{index+1}</span>
                                            )}
                                        </div>
                                    )
                                })
                            }
                            <button type="button" onClick={handleAddAttendees} className={"btn btn--orange-noBg float-right width-auto " + (attendees.length < eventData.ticketsAvailable ? 'show' : 'hidden')}>
                                <img src="/images/plus.svg" alt="add icon" />
                                Add an Attendee
                            </button>
                        </div>
                        
                        <div className="actions">
                            <button type="submit" className="btn btn--orange">Book Tickets</button>
                            <Link to="/events" className="btn btn--orange-whitebg">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>

            {
                modal && (
                    <Modal 
                        cssClass="eventBooking__modal"
                        title={`You have booked ${selectedSeats} tickets for`}
                        onClose={closeModal}
                        onSuccess={bookingSuccess}
                        btn1Text='Make Payment'
                        btn2Text='Back to Booking'
                    >
                        <div className="eventBooking__modal-data">
                            <h2>{eventData.title}</h2>
                            <h3>{eventData.date}</h3>
                        </div>
                    </Modal>
                )
            }
        </main>
    );
};

const mapStateToProps = (state) => ({
    events : state.EventsDataReducer?.events,
    eventBookStatus: state.EventBookingReducer?.eventBookedSuccess
});

const mapDispatchToProps = (dispatch) => ({
    postEventBookingData: (data) => dispatch(postEventBookingDataRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventBooking);

EventBooking.propTypes = {
    postEventBookingData: PropTypes.func,
    events: PropTypes.array,
    eventBookStatus: PropTypes.bool
};