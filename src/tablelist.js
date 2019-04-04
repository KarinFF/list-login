import React from "react"


class TableList extends React.Component {
  render() {
    return (

      <div className="textstyle">
        <p>Full name: {this.props.name}</p>
        <p>Username: {this.props.title}</p>
        <p>Email: <a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
      </div>
      )
    }
  }

export default TableList
