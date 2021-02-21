import useWindowDimensions from "./screenDim.js"
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { db } from "../components/services/firestore"
import 'firebase/firestore';


function handleClick(Email, Name){

   var docRef = db.collection("Users").doc(Email);
   var arr = []

   docRef.get().then((doc) => {
    if (doc.exists) {
        arr = doc.data().contacts;
        console.log(arr)
        arr.push(Name)
        docRef.update({
        contacts: arr });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    

}


function App() {

    const { height, width } = useWindowDimensions();
    
    const [conName, setConName] = useState("");
    const [clicked, setClicked] = useState(false);
    const [conNames, setConNames] = useState([]);
    const [count, setCount] = useState(0);

    
    const url = window.location.href
    const url2 = url.substring(0,21)

    const email = url.substring(31, url.length);

    if(email.length == 0) window.location.href="/signIn" ;
    

    React.useEffect( ()=> {
      var docRef = db.collection("Users").doc(email);
      
      docRef.get().then((doc) => {
        var arr = []
        if (doc.exists) {
            arr = doc.data().contacts;
            setConNames(arr)
        }
      },)

    },[count]);

      const contactsList = conNames.map(contact => {
        return <ul><div style = {{fontSize: 18}} onClick = {() => (window.location.href=url2+"/"+"msg/"+email+"/"+contact)}>{contact}</div></ul>;})
  
    
    

    return (
    <div className="App" style={{ backgroundSize: "cover"  ,backgroundImage: "url('https://sgl-assets.imgix.net/files/article_hero/yosemite-glacier-point-sunset-national-park-summer-activities-things-to-do-via-magazine-shutterstock_552174034.jpg?w=1440&h=720&crop=faces,edges')" }} >

      <header style = {{fontSize: 24,paddingTop:height *.05, paddingBottom: height *.1, width: width, }}>
        Contacts
      </header>  
      <div>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Add a Contact!</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={conName}
            onChange={(e) => setConName(e.target.value)}
            
            style = {{marginLeft: .003*width}}
          />
        </Form.Group>
        <div style = {{marginTop: .02*height}}>
          <Button block size="lg" type="submit" onMouseOut= { () => setCount(count + 1)} onClick= {() => { handleClick(email, conName)}}>
            Add contact
          </Button>
          <Button block size="lg" type="submit" onClick= {() => { setCount(count + 1); setClicked(true); }}  >
            Show Contacts
          </Button>
        </div>
      </div>


      {(clicked == true) ? 
      <div style = {{marginTop:height*.05 , marginLeft: width *.1, textAlign: "left", fontWeight:"bold"}}>
        <header style = {{fontWeight: "bold", fontSize: 24}}>Contacts List</header>
        {contactsList}
      </div> : <div/>

      }
    </div> );
}

export default App;