import React from 'react';
import { connect } from 'react-redux';

import {
    UPDATE_FIELD_NEW_EVENT,
    CREATE_NEW_EVENT,
    PAGE_NEXT_FORM,
    PAGE_PREV_FORM
} from '../constants/actionTypes';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => ({ ...state.events });

const mapDispatchToProps = dispatch => ({
    onUpdateField: (key, value) => 
        dispatch({type: UPDATE_FIELD_NEW_EVENT, key, value}),
    onSubmit: () =>
        dispatch({type: CREATE_NEW_EVENT}),
    onNextPage: () => 
        dispatch({type: PAGE_NEXT_FORM}),
    onPrevPage: () => 
        dispatch({type: PAGE_PREV_FORM})
});

const MainDetailForm = props => {
    return (
        <div>
            <div className="row">
                <label htmlFor="name">Event Name</label>
                <input id="name"
                    value={props.name}
                    onChange={(e) => { props.onUpdateField('name', e) }} />
            </div>

            <div className="row">
                <label htmlFor="description">Event description</label>
                <input id="description"
                    value={props.description}
                    onChange={(e) => { props.onUpdateField('description', e) }} />
            </div>

            <label htmlFor="date">Event date</label>
            <div className="row valign-wrapper">

                <div className="col s6">
                    <DatePicker id="date" className="datepicker"
                        selected={props.date}
                        onSelect={(date) => { props.onUpdateDate(date) }} />
                </div>

                <div className="col s6">
                    <div className="switch">
                        <label>
                            Jobs
                            <input id="jobs" type="checkbox" onChange={props.onChangeJobs} />
                            <span className="lever"></span>
                            No Jobs
                        </label>
                    </div>
                </div>
            </div>

            <div className="row right-align">
                <button className="btn waves-effect waves-light "
                    type="submit"
                    name="action"
                    onClick={props.onNextPage}>
                    Next
                <i className="material-icons right">chevron_right</i>
                </button>
            </div>
        </div>
    )
}


const JobsForm = props => {
    return (
        <div className="row">
            <button className="btn waves-effect waves-light"
                type="submit" name="action"
                onClick={props.onPrevPage}>
                Back
            <i className="material-icons left">chevron_leftt</i>
            </button>

            <button className="btn waves-effect waves-light right-align"
                type="submit" name="action"
                onClick={props.onNextPage}>
                Create
            <i className="material-icons right">chevron_right</i>
            </button>
        </div>
    )
}


class NewEventContrainer extends React.Component {

    onUpdateField = (key, event) => this.props.onUpdateField(key, event.target.value);

    onChangeJobs = (event) => {
        this.props.onUpdateField('hasJobs', !this.props.hasJobs)
    }

    onUpdateDate = (date) => this.props.onUpdateField('date', date);

    onNextPage = () => this.props.onNextPage();

    onPrevPage = () => this.props.onPrevPage();

    onSubmitForm = ev => {
        ev.preventDefault();
        this.props.onSubmit();
    };


    currentForm = () => {
        switch (this.props.currentPage) {
            case 0:
                return (
                    <MainDetailForm
                        name={this.props.name}
                        description={this.props.description}
                        date={this.props.date}
                        onUpdateField={this.onUpdateField}
                        onUpdateDate={this.onUpdateDate}
                        onChangeJobs={this.onChangeJobs}
                        onNextPage={this.onNextPage}
                    />)
                break;

            case 1:
                return (
                    <JobsForm 
                        onUpdateField={this.onUpdateField}
                    />
                )
                break;
        
            default:
                break;
        }

    }


    render() {
        console.log("xD")
        return (
            <form onSubmit={this.onSubmitForm}>
            {
                this.currentForm()
            }
            </form>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEventContrainer);