
import React, { Component } from 'react'
import TableList from "./tablelist"
import "./css/table.css"


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: []
        }
      }

    componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => (
      response.json()
    )).then(json => {
      this.setState({ items: json })
    })
  }

render() {
    return (
         <div>
           <form className="user-edit">
           <p>Add user</p>
          <input className="user-input" type="text" placeholder="Name" />
          <input className="user-input" type="text" placeholder="Username"/>
          <input className="user-input" type="text" placeholder="Email"/>
          <button className="button-edit" type="submit">Add user</button>
        </form>
          <h2>List of users</h2>
          {this.state.items.map((items) => {
              return <TableList
                 key={items.id}
                name={items.name}
                title={items.username}
                email={items.email}/>
          })}
       </div>
     )
  }
}
export default Table
