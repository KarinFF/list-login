import React from "react"


class TableList extends React.Component {
  render() {
    return (

      <div className="textstyle">
        <p>Full name</p><h2>{this.props.name}</h2>
        <p>Username: {this.props.title}</p>
        <p>Email</p><a href={"mailto:" + this.props.email}>{this.props.email}</a>
      </div>
      )
    }
  }

export default TableList
