import React from 'react';
import { connect } from 'react-redux';

import {
    UPDATE_FIELD_NEW_EVENT
} from '../constants/actionTypes';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => ({ ...state.events });

const mapDispatchToProps = dispatch => ({
    onUpdateField: (key, value) => 
        dispatch({type: UPDATE_FIELD_NEW_EVENT, key, value})
});

class NewEventContrainer extends React.Component {

    onUpdateField = (key, event) => this.props.onUpdateField(key, event.target.value);

    onUpdateDate = (date) => this.props.onUpdateField('date', date);

    onSubmitForm = ev => {
        ev.preventDefault();
        // this.props.onSubmit();
    };

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <div className="row">
                    <div className="input-field">
                        <input id="name" className="validate"
                            value={this.props.name}
                            onChange={(e) => { this.props.onUpdateField('name', e) }} />
                        <span className="helper-text">
                            Enter the name of the event
                        </span>
                    </div>

                    <DatePicker id="date" className="datepicker"
                        selected={Date.now}
                        onSelect={(date) => { this.props.onUpdateDate(date) }} />

                    <label htmlFor="date">Enter the Event description</label>
                </div>

                <div className="row">
                    <div>
                        <input id="description"
                            value={this.props.description}
                            onChange={(e) => { this.props.onUpdateField('description', e) }} />
                        <label htmlFor="description">Enter the Event description</label>
                    </div>
                </div>

                <div className="row">
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