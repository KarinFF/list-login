import React, { Component } from 'react'
import firebase from "./firebase"
import Table from "./Table"
import  "./css/home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        firebase.auth().signOut();
    }


    render() {
        return (
            <div>
              <div className="header">
                <h1>Welcome Admin </h1>
                <button className="logoutbutton" onClick={this.logout}>Logout </button>
              </div>
             <Table/>
            </div>
        )
    }
}

export default Home
