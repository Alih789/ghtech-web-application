import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useWindowDimensions from "./screenDim.js"
import React, { useState } from 'react';
import { db } from "../components/services/firestore"
import 'firebase/firestore';





function IsAuthorized(isSigned,Email){
  var url = "/contacts/"+Email;
  (isSigned)? window.location.href=url : window.location.href="/signIn" ;  
}

function isAccount(){

}

function HandleSignUp(Name, Email, Password,){

  db.collection("Users").doc(Email).set({
    name: Name,
    email: Email,
    password: Password,
    contacts: []
    });


}


function App() {  
  
  const url = window.location.href;

  if(url.length !=28) window.location.href="/signIn";
  //console.log(url.length)

  const { height, width } = useWindowDimensions();
  
  const [signed, setSigned] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  

  return (
    <div className="App" style={{backgroundSize: "cover" ,backgroundImage: "url('https://sgl-assets.imgix.net/files/article_hero/yosemite-glacier-point-sunset-national-park-summer-activities-things-to-do-via-magazine-shutterstock_552174034.jpg?w=1440&h=720&crop=faces,edges')" }} >

      <header style = {{fontSize: 24,paddingTop:height *.05, paddingBottom: height *.1, width: width,flex: 1 }}>
        This is a header
      </header>

      <header style={{flex:1, fontSize: 24}}>
        This is another place holder
      </header>

      {!signed && (
        <div>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>


        <Button block size="lg" type="submit" onClick= {() => {HandleSignUp(name, email, password);setSigned(true); console.log(signed)}}>
          Sign up
        </Button>
        </div>
      )}

      <button onClick= {() => {IsAuthorized(signed,email)}}>
        Check your Contacts!
      </button>


    </div>
  );
}

export default App;
