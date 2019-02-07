import React, { Component } from 'react'
import firebase from "./firebase"
import Table from "./Table"

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
              <h1>Welcome Admin </h1>
              <button onClick={this.logout}>Logout </button>
             <Table/>
            </div>
        )
    }
}

export default Home
