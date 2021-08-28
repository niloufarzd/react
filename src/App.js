import React, { Component } from 'react';
import Navbar from './component/Navbar';
import './App.css';
// import Useritem from './component/Useritem';
import Users from'./component/Users';
import axios from 'axios';
export class App extends Component {
   state={
     users:[],
     loading:false
   };
  async componentDidMount(){

    this.setState({loading:true});
  const res=await axios.get('https://api.github.com/users');
  this.setState({ users:res.data,loading:false});
}
  render() {
    return (
    <div>  
    <Navbar title="Github finder" icon="fab fa-github"></Navbar>
    <div className ="container">
     <Users loading={this.state.loading} users={this.state.users}></Users>
    </div>
   </div>
    )
  }
}

export default App
