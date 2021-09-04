import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getUsersFn, INCREASE, DECREASE } from "./store/actions";
import './App.css';

class App extends Component {

  handleCLick = () => {
      const { dispatch } = this.props;
      dispatch(getUsersFn());
      console.log(this.props.state.userReducer.users);
  }

  render() {
    return (
      <div className="App">
        <button onClick={ () => {this.props.dispatch(INCREASE())} }>plus</button>
        <button onClick={ () => {this.props.dispatch(DECREASE())} }>minus</button>
        <div>{this.props.state.increaseReducer.count}</div>
        <button className="btn btn-primary" onClick={this.handleCLick}>GET USERS</button>
          <div>{this.props.state.userReducer.users}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(App);
