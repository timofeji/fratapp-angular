import React from 'react';
import { connect } from 'react-redux';

import { TOGGLE_MODAL_NEW_EVENT } from '../constants/actionTypes';

import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import FloatingButton from '../components/FloatingButton';

const mapStateToProps = state => ({ ...state.events });

const mapDispatchToProps = dispatch => ({
    toggleNewEventModal: () =>
        dispatch({ type: TOGGLE_MODAL_NEW_EVENT })
});


const NewEventForm = (props) => {
    return (
            <form onSubmit={props.submit}>
                <div className="row">
                    <div className="row">
                        <div className="input-field">
                            <input id="name" className="validate" />
                            <label htmlFor="name">Event Name</label>
                            <span className="helper-text">
                                Enter the name of the event
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div>
                        <input id="description"/>
                        <label htmlFor="description">Event description</label>
                    </div>
                </div>

                <div className="row right-align">
                    <button className="btn waves-effect waves-light " type="submit" name="action">
                        Login
                        <i className="material-icons right">send</i>
                    </button>

                </div>
            </form>
    )
}

class EventsContainer extends React.Component {

    toggleNewEventModal = (event) => this.props.toggleNewEventModal();


    render() {
        return (
            <div>
                {
                    this.props.isCreatingNewEvent ?
                        <Modal content={<NewEventForm />} 
                               onClose={this.toggleNewEventModal} 
                               title="New Event"/> :
                        <FloatingButton onClick={this.toggleNewEventModal} icon={"add"} />
                }

                <div className="container">
                    <h2>Upcoming Events</h2>
                    <div className="row">

                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);