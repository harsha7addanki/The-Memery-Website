import initFirebase from '../firebase/initFirebase'
import {Auth, getAuth} from 'firebase/auth'

const firebase:any = initFirebase();
const auth:Auth = getAuth(firebase.app)

export default function ProtectedPageRoute(
    _context,
    redirectTo, // string route where user will be redirected if they are not authenticated
    getProps, // function to fetch initial props
  ) {
    let userIsAuthenticated = false // TODO: check if user is userIsAuthenticated
    if(auth.currentUser !== null){
      userIsAuthenticated = true;
    }
    if (!userIsAuthenticated) {
      return {
        redirect: {
          destination: redirectTo ?? '/auth',
          permanent: false,
        }
      }
    }
  
    if (getProps) {
      return {
        props: getProps(),
      }
    }
    
    const dataPromise = new Promise((resolve) => {
      resolve({
        props: {},
      })
    });

    return dataPromise
  }
  