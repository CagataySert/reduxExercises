import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/user-action';


class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Tarık');
  }

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.props.user}</h2>
          <button onClick={this.onUpdateUser}>Change the name</button>
        </header>
      </div>
    );
  }
}

const mapStateToPros = (state, props) => {
  return {
    ...state,
    myCount: props.count + 2
  };
};

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUsers
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
  return {};
}
export default connect(mapStateToPros, mapDispatchToProps)(App);
