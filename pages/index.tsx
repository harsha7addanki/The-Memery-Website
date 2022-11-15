import Image from 'next/image'
import Navbar from '@components/base/Navbar'
import MemeStream from '@components/base/firebase/firestore/stream'
import firebase from '@firebase-util/initFirebase'
import PWAInstallerPrompt from 'react-pwa-installer-prompt'
import {logEvent} from 'firebase/analytics'

console.log(MemeStream)
const fb:any = firebase()

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <MemeStream/>
        <PWAInstallerPrompt 
          render={({ onClick }) => (
            <div className="position-fixed bottom-0 end-0 rounded-circle m-5">
              <button type="button" className="btn btn-success" onClick={()=>{
                onClick();
                logEvent(fb.analytics,'install_prompt_clicked')
              }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                  <span style={{ padding: '0.5rem' }}>Install</span>
              </button>
            </div>
          )}
          callback={(data) => console.log(data)} 
        />
      </div>
    </div>
  )
}
