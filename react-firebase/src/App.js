import React, { Component } from 'react'
import firebase from './firebase'
import Login from "./Login"
import Home from "./Home"

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
     <div className="App">
       {this.state.user ?  (<Home />) : (<Login />)}
     </div>
   )
}
}

 export default App
