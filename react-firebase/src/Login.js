import React, { Component } from 'react'
import firebase from './firebase'

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
          console.log(error)
        });
    }

    signup(e){
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      }).then((u)=>{console.log(u)})
      .catch((error) => {
          console.log(error)
        })
    }
    render() {
      return (
         <div>
           <form>
            <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" onClick={this.login}>Login</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}}>Signup, please enter email and password above</button>
          </form>
         </div>
      )
    }
  }
  export default Login
