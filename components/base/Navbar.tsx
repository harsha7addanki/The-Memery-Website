import { Component } from "react"
import initFirebase from '@firebase-util/initFirebase'
import {getAuth} from 'firebase/auth'

const app = initFirebase().app;
const auth = getAuth(app)
export default class Navbar extends Component<{},{loggedIn:boolean}> {
  constructor(prop){
    super(prop)
    this.state = {
      loggedIn :false
    }
  }
  render() {
    return (
        <nav className="navbar navbar-dark bg-success">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              The Memery
            </a>
            {this.state.loggedIn ?
              <span className="navbar-text">
                <img src={auth.currentUser ? auth.currentUser.photoURL : null}/>
                </span>
            : null}
            
          </div>
        </nav>
    )
  }

  componentDidMount(){
    if(auth.currentUser !== null){
      this.setState({
        loggedIn :true
      })
    }else{
      console.log("user not loggedIn so user is:")
      console.log(auth.currentUser)
    }
  }
}