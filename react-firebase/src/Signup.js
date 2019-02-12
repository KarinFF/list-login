import React, { Component } from 'react'
import firebase from './firebase'

class Signup extends Component {
  constructor(props) {
    super(props);
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

  signup(e){
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        alert("Nope")
      })
  }
  render() {
    return (
       <div className="start">
         <form className="start-content">
            <h2>Please signup here</h2>
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
            <button onClick={this.signup}>Signup</button>
          </div>
        </form>
       </div>
    )
  }
}
export default Signup
