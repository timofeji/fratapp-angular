import React from 'react';

import EventCard from "../components/EventCard";
import FloatingButton from "../components/FloatingButton";



class EventsContainer extends React.Component {


    onNewEvent = (event) => {


    }

    render() {
        return (
            <div>
                <FloatingButton onClick={this.onNewEvent} icon={"add"}/>


                <div className="container">
                    <h2>Upcoming Events</h2>
                    <div className="row">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>
        )
    }
}
export default EventsContainer;