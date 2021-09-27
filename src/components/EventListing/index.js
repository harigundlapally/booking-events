import React, { useEffect, useState } from 'react';
import Event from '../Event';
import Search from '../Search';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEventsDataRequest } from '../../redux/actions/get_events_action';
import { resetEventBooking } from '../../redux/actions/post_eventbooking_action';
import './EventListing.css';

const EventListing = (props) => {
    const [allEvents,setAllEvents] = useState([]);
    const [allEventsDefault,setAllEventsDefault] = useState([]);

    useEffect(() => {
        props.resetBooking();
        props.getEventsData();
    }, []);
    
    useEffect(() => {
        setAllEvents(props.events);
        setAllEventsDefault(props.events);
    }, [props.events]);

    const searchEvents = async (query) => {
        console.log('hello')
        if (query.length <= 1) {
            setAllEvents(allEventsDefault);
            return;
        }
    
        const all = await allEvents.filter((event) => {
            const eventName = event.title.toLowerCase();
            return eventName.includes(query.toLowerCase());
        });

        setAllEvents(all);
    };

    return (
        <main>
            <Search onchange={searchEvents}/>
            <div className="eventListing">
                <div className="container">
                    <h1 className="eventListing__title"><span>Events</span>({allEvents?.length})</h1>
                    <div className="eventListing__event">
                        {
                            allEvents?.map(event => <Event id={event.id} title={event.title} date={event.date} imagePath={event.imagePath} ticketsAvailable={event.ticketsAvailable} key={event.id}/>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = (state) => {
    return{
        events : state.EventsDataReducer?.events
    }
};

const mapDispatchToProps = (dispatch) => ({
    getEventsData: (data) => dispatch(getEventsDataRequest(data)),
    resetBooking: () => dispatch(resetEventBooking())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventListing);

EventListing.propTypes = {
    getEventsData: PropTypes.func,
    resetBooking: PropTypes.func,
    events: PropTypes.array
};