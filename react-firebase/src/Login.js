import React, { Component } from 'react'
import { Link } from "react-router-dom"
import firebase from './firebase'
import "./css/login.css"
import Signup from "./Signup"

  class Login extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        email: '',
        password: ''
      };
    }

    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    login(e) {
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).catch((error) => {
          alert("Wrong password!")
        });
    }
    render() {
      return (
         <div className="start">
           <img src={require("./img/leaves.jpg")} alt="big green leaves" />
           <form className="start-content">
              <h2>Welcome to Kakanmonsters admin site</h2>
            <div className="form-content">
              <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address </label>
               <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="passwords">
                <label htmlFor="exampleInputPassword1">Password </label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>
            <div className="buttonform">
              <button type="submit" onClick={this.login}>Let´s go</button>
              <button><Link to="/signup">Not an admin yet? Signup here!</Link></button>
            </div>
          </form>
         </div>
      )
    }
  }
  export default Login
