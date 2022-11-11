import Image from 'next/image'
import Navbar from '@components/base/Navbar'
import MemeStream from '@components/base/firebase/firestore/stream'
import firebase from '@firebase-util/initFirebase'
console.log(MemeStream)
firebase()

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <MemeStream/>
        
      </div>
    </div>
  )
}
