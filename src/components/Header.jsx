import React from "react";
import { Link } from "react-router-dom";


export const loggedOutLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <Link to="/login" className="nav-link">
                Login
            </Link>
        </li>
    </ul>
)

export const loggedInLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <Link to="/events" className="nav-link">
                Events
            </Link>
        </li>

        <li>
            <Link to="/polls" className="nav-link">
                Polls
            </Link>
        </li>

        <li>
            <Link to="/rankings" className="nav-link">
                Rankings
            </Link>
        </li>
    </ul>
)

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper green darken-3">
                    <a href="/" className="brand-logo">FUCK pikAPP</a>
                    {this.props.isLoggedIn ? loggedInLinks : loggedOutLinks}
                </div>
            </nav>
        );
    }
}

export default Header;


