import useWindowDimensions from "./screenDim.js"
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { db } from "../components/services/firestore"
import 'firebase/firestore';


function handleClick(Email,Msg){

    var docRef = db.collection("Users").doc(Email);
    var arr = []

    docRef.get().then((doc) => {
     if (doc.exists) {
         arr = doc.data().msgLog;
         console.log(arr)
         arr.push(Msg)
         docRef.update({
         msgLog: arr });
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
     }).catch((error) => {
         console.log("Error getting document:", error);
     });
        
   
    

}


function App() {

    const { height, width } = useWindowDimensions()
    const [msg, setMsg] = useState("")
    const [msgs, setMsgs] = useState([])
    const [count, setCount] = useState(0)

    const url = window.location.href

    const info = url.split("/")
    console.log(info)

    const email = info[4]
    const contact = info[5]

    if(email.length == 0) window.location.href="/signIn" ;

    React.useEffect( ()=> {
      var docRef = db.collection("Users").doc(email);
      
      docRef.get().then((doc) => {
        var arr = []
        if (doc.exists) {
            arr = doc.data().msgLog;
            console.log("HVaC inbound")
            setMsgs(arr)
            console.log(arr)
        }
      },)

    },[count]);

    

    const contactsList = msgs.map(msg => {
        return <ul><div>{msg}</div></ul>;})

    

    return (
    <div>
        <div className="App" style={{backgroundSize: "cover" ,backgroundImage: "url('https://sgl-assets.imgix.net/files/article_hero/yosemite-glacier-point-sunset-national-park-summer-activities-things-to-do-via-magazine-shutterstock_552174034.jpg?w=1440&h=720&crop=faces,edges')" }} >

            <header style = {{fontSize: 24,paddingTop:height *.05, paddingBottom: height *.1, width: width, }}>
                Your messages to {contact}
            </header>  
            {contactsList}
        

        
            <Form.Group size="lg" controlId="name" style = {{backgroundColor:"red", marginTop:height*.5}}> 
                <Form.Label>Message </Form.Label>
                <Form.Control
                    autoFocus
                    type="name"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" style={{marginRight: width*.033}} onClick= {() => {handleClick(email,msg)}} onMouseOut = {()=>setCount(count + 1)}>
                Send
                </Button>

            </div>

        
        

        

    </div>
    );
}

export default App;