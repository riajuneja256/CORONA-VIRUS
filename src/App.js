import React from 'react';
import NavBar from './navbar/navbar';
import Body from './body_container/body';
import {getData} from  './body_container/actions';
import {getData1} from  './body_container/new_action';
import { connect } from 'react-redux';
import './App.css';
import Example from './loading';

class App extends React.Component {
  componentDidMount(){
    this.props.getData();
    this.props.getData1();
  }
  render(){
    return (
      <div className="App">
        <NavBar/>
          {(this.props.state) ? <Example type={"balls"} color={"gray"} /> : <Body/>}
      </div>
    );
  }
}


// AppContainer.js

const mapStateToProps = (reducerData) => {
  return {
    state: reducerData.ourReducer.loading,
  };
}
const mapDispatchToProps = { 
  getData,
  getData1,
};
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);

export default AppContainer;