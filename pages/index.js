import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/base/Navbar'
import MemeStream from '../components/base/firebase/firestore/stream'
import firebase from '../firebase/initFirebase'
console.log(MemeStream)
firebase()

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Memery</title>
        <meta name="description" content="A Website To scrool Throh Mems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Navbar/>
      <div className="container">
        <MemeStream/>
        
      </div>
    </div>
  )
}
