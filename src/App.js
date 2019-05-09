import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from "react-router-dom"
import firebase from './firebase'
import Login from "./Login"
import Home from "./Home"
import Signup from "./Signup"

class App extends Component {
  constructor() {
    super()
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null })
        localStorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <Router>
     <div className="App">
       {this.state.user ?  (<Home />) : (<Login />)}
         <Route path="/signup" component={Signup}/>
     </div>
     </Router>
   )
}
}

 export default App
