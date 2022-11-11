// import the component class from react and fire base auth
import { Component } from 'react';
import initFirebase from '@firebase-util/initFirebase';
import Navbar from '@components/base/Navbar'
import ProtectedPageRoute from '@lib/admin-only-route'

const app = initFirebase().app;
// make a function componet
class MyComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
    return (
        <>
            
            <Navbar/>
            
            <div className="container">
                
            </div>
        </>
    );
  }
}

// export the component class
export default MyComponent

export const getServerSideProps = (context) => 
    ProtectedPageRoute(context, null, async () => {

    })