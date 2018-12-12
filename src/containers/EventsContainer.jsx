import React from 'react';
import { connect } from 'react-redux';

import { TOGGLE_MODAL_NEW_EVENT } from '../constants/actionTypes';

import EventCard from '../components/Events/EventCard';
import Modal from '../components/Modal';
import FloatingButton from '../components/FloatingButton';

import NewEventContainer from './NewEventContainer';

const mapStateToProps = state => ({ ...state.events });

const mapDispatchToProps = dispatch => ({
    toggleNewEventModal: () =>
        dispatch({ type: TOGGLE_MODAL_NEW_EVENT }),
});

class EventsContainer extends React.Component {

    toggleNewEventModal = (event) => this.props.toggleNewEventModal();

    render() {
        return (
            <div>
                {
                    this.props.isCreatingNewEvent ?
                        <Modal content={<NewEventContainer/>}
                               onSubmit={this.OnSubmitForm}
                               onClose={this.toggleNewEventModal}
                               title="Create New Event" /> :
                    <FloatingButton onClick={this.toggleNewEventModal} icon={"add"} />
                }

                <div className="container">
                    <h2>Upcoming Events</h2>
                    <div className="row">
                        <EventCard/>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);