import React from 'react';
import { connect } from 'react-redux';

import {
    UPDATE_FIELD_NEW_EVENT,
    CREATE_NEW_EVENT
} from '../constants/actionTypes';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => ({ ...state.events });

const mapDispatchToProps = dispatch => ({
    onUpdateField: (key, value) => 
        dispatch({type: UPDATE_FIELD_NEW_EVENT, key, value}),
    onSubmit: () =>
        dispatch({type: CREATE_NEW_EVENT})
});

class NewEventContrainer extends React.Component {

    onUpdateField = (key, event) => this.props.onUpdateField(key, event.target.value);

    onUpdateDate = (date) => this.props.onUpdateField('date', date);

    onSubmitForm = ev => {
        ev.preventDefault();
        this.props.onSubmit();
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <div className="row">
                    <label htmlFor="name">Event Name</label>
                    <input id="name"
                        value={this.props.name}
                        onChange={(e) => { this.onUpdateField('name', e) }} />
                </div>

                <div className="row">
                    <label htmlFor="description">Event description</label>
                    <input id="description"
                        value={this.props.description}
                        onChange={(e) => { this.onUpdateField('description', e) }} />
                </div>

                <label htmlFor="date">Event date</label>
                <div className="row">
                    <DatePicker id="date" className="datepicker"
                        selected={this.props.date}
                        onSelect={(date) => { this.onUpdateDate(date) }} />
                </div>

                <div className="row right-align">
                    <button className="btn waves-effect waves-light " type="submit" name="action">
                        Next
                    <i className="material-icons right">chevron_right</i>
                    </button>
                </div>
            </form>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEventContrainer);