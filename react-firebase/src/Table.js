
import React, { Component } from 'react'
import TableList from "./tablelist"


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
          <h1>List of users</h1>
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
