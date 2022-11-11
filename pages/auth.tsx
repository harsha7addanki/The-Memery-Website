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
                <button onClick={this.openLogin} className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                     Login With Google
                </button>
            </div>
        </>
    );
  }
}

// export the component class
export default MyComponent

