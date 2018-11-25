import React from 'react';

import EventCard from "../components/EventCard";
import FloatingButton from "../components/FloatingButton";


const NewEventModal = () => {
    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>

    )
}


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
                    </div>
                </div>
            </div>
        )
    }
}
export default EventsContainer;