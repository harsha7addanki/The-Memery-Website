import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import {getAnalytics} from 'firebase/analytics'

const clientCred = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


export default function initFirebase(){
    const app = firebase.initializeApp(clientCred);
    let analytics;
    if(typeof window !== 'undefined'){
        analytics = getAnalytics(app)
    }
    return {
        'firebase':firebase, 
        'analytics':analytics,
        'app':app
    };
}
