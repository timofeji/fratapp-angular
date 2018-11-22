import React from 'react';

import EventCard from "../components/EventCard";

class EventsContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Upcoming Events</h2>
                <div className="row">
                    <EventCard/> 
                </div>
            </div>
        )
    }
}
export default EventsContainer;