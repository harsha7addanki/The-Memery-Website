// import the component class from react and fire base auth
import { Component } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, indexedDBLocalPersistence} from 'firebase/auth'
import initFirebase from '../firebase/initFirebase';
import Navbar from '../components/base/Navbar'
import AuthProps from '../lib/AuthProps';

const provider = new GoogleAuthProvider();
const app = initFirebase().app;
// make a function componet
class MyComponent extends Component<{},AuthProps> {

    constructor(props){
        super(props)
        this.state = {
            error: false,
            data : {
                code: null,
                message: null
            }
        };
        this.openLogin = this.openLogin.bind(this)
    }
  
    openLogin(){
        // sign in with popup
        const auth = getAuth(app)
        setPersistence(auth, indexedDBLocalPersistence).then(() => {

            return signInWithPopup(auth, provider);
        }).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          
            console.log("err")  
          this.setState({ 
            error:true,
            data:{
                code:errorCode,
                message: errorMessage 
            }
          })
        });
      
    }
    render() {
    return (
        <>
            
            <Navbar/>
            
            <div className="container">
                <h1>plz login with googol:</h1>
                {this.state.error ?  
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <div>
                            Err Code:{this.state.data.code},  
                            <strong>{this.state.data.message}</strong>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> 
                : null}
                <button onClick={this.openLogin} className="btn btn-primary">Plz Click To Login With Google</button>
            </div>
        </>
    );
  }
}

// export the component class
export default MyComponent

