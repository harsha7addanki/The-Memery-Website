import { Component } from "react"
import initFirebase from '@firebase-util/initFirebase'
import {getAuth} from 'firebase/auth'
import Link from 'next/link'

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
            <Link href="/">
              <a className="navbar-brand">
                The Memery
              </a>
            </Link>
            {this.state.loggedIn ?
              <span className="navbar-text">
                <img src={auth.currentUser ? auth.currentUser.photoURL : null} width={30} height={30}/>
                </span>
            : <Link href={"/auth/"}><a role="button" className="btn btn-primary">Sign In</a></Link>}
            
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