import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Header from '../components/Header';
import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import EventsContainer from './EventsContainer';


const mapStateToProps = state => ({ ...state.auth });

class App extends React.Component {
  render() {
    return (
      <div>
        <Header isLoggedIn={this.props.isLoggedIn} />

        <main>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/events" component={EventsContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
