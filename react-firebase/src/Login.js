import React, { Component } from 'react'
import firebase from './firebase'
import "./css/login.css"

  class Login extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this)
      this.signup = this.signup.bind(this)
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

    signup(e){
      e.preventDefault()
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).then((u)=>{console.log(u)})
      .catch((error) => {
          alert("ERROR")
        })
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
              <button onClick={this.signup}>Signup</button>
            </div>
              <p>To sign up, simply enter your email and password in the form and click signup</p>
          </form>
         </div>
      )
    }
  }
  export default Login
