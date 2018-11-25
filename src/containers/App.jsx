import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Header from '../components/Header';
import Loader from "../components/Loader";

import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import EventsContainer from './EventsContainer';

const mapStateToProps = state => ({ ...state.auth });

class App extends React.Component {
  render() {
    return (
      <div>
        <Header isLoggedIn={this.props.isLoggedIn} />

        {this.props.inProgress ? <Loader /> :
          <main>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/events" component={EventsContainer} />
              <Route path="/login" component={LoginContainer} />
            </Switch>
          </main>
          }
      </div>
      );
    }
  }
  
  export default withRouter(connect(mapStateToProps)(App));
