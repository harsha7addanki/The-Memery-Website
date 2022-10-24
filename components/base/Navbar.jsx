import { Component } from "react"

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Memery
          </a>
        </div>
      </nav>
    )
  }
}