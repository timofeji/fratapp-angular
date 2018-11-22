import React from "react";
import { connect } from "react-redux";
import { authService } from "../services/authService";
import { LOGIN, UPDATE_FIELD_AUTH } from "../constants/actionTypes";


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (token) =>
        dispatch({ type: LOGIN, payload: token}),

});


class LoginContainer extends React.Component {
    constructor() {
        super();
        this.changeEmail = (event) => this.props.onChangeEmail(event.target.value);
        this.changePassword = (event) => this.props.onChangePassword(event.target.value);
        this.submitForm = (email, password) => ev => {
            ev.preventDefault();
            authService.login(email, password).then((token) => {
                console.log(token);
                this.props.onSubmit(token);
            });
        };
    }

    render() {
        const email = this.props.email;
        const password = this.props.password;
        return (
            <div className="container">
                <div className="row">
                    <h3>Login</h3>
                </div>

                <form onSubmit={this.submitForm(email, password)}>
                    <div className="row">
                        <div className="row">
                            <div className="input-field">
                                <input id="email" type="email" 
                                       className="validate" 
                                       onChange={this.changeEmail}/>
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" 
                                      data-error="not a valid email" 
                                      data-success="valid email">
                                        Enter your email
                                      </span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <input id="password" type="password" 
                                   className="validate" 
                                   onChange={this.changePassword}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row right-align">
                        <button className="btn waves-effect waves-light " type="submit" name="action">
                            Login
                            <i className="material-icons right">send</i>
                        </button>

                    </div>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);