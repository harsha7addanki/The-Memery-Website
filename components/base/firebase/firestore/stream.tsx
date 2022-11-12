import {getFirestore, getDocs, collection} from 'firebase/firestore'
import initFirebase from '@firebase-util/initFirebase'
import {getAuth} from 'firebase/auth'
import {Component} from 'react'
import Image from 'next/image'
import StreamProps from '@lib/StreamProps'

class MemeStream extends  Component<{},StreamProps>{
    constructor(props){
        super(props)
        this.state = {
            memes: []
        }
    }

    render(){
        console.log("render -> State memes length - " + this.state.memes.length)
        this.state.memes.forEach(meme => {
            console.log(" render -> " + meme.name );
        });

        // const testData = [
        //     {"name": "First Meme", "url":"https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/train-3448-72edc8c66df509608c1e13f712a1436e@1x.jpg"},
        //     {"name": " Second Meme", "url": "http://cdn.cnn.com/cnnnext/dam/assets/220429162523-08-incredible-train-journeys.jpg"}
        // ];

        const mapData = this.state.memes.map((d,i) => 
            <div key={i}>
                <br></br>
                <h1 style={{ }}>{d.name}</h1><br/>
                    <img 
                        src={d.uri} 
                        alt={d.name}
                    />
                <hr/>
                <br></br>
            </div>
        );

        return (
            <div>
                {mapData.length > 0?
                    mapData:
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}>
                        <div
                        className="spinner-border text-success"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        );

        // return (
        //     <>
        //         {this.state.memes.map(function(meme, i){
        //             console.log("Loop for memes " + i)
        //             if(meme.name === ""){
        //                 return <div key={i}></div>;
        //             }
        //             return (
        //                 <p key={i}>
        //                     <strong>{meme.name}</strong>
        //                     <img alt="meme" src={meme.uri}></img>
        //                 </p>
        //             );
        //         })}
        //     </>
        // );
    }
    async componentDidMount(){
        initFirebase
        const db = getFirestore()
        const lmemes = await getDocs(collection(db, "teamimg"));
        console.log("componentDidMount -> Loading from db ");
        let memeData = [];
        this.setState({memes: []});
        lmemes.forEach(meme => {
            console.log("componentDidMount -> Meme from db  = " + meme.data().name);
            memeData.unshift({"name": meme.data().name,"uri" : meme.data().uri});
        });
        console.log("componentDidMount -> Size of memeData  = " + memeData.length);
        this.setState( { memes: memeData } )
        console.log("Size of state.memes = " + this.state.memes.length);
    }
}

export default MemeStream;