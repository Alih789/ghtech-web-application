import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useWindowDimensions from "./screenDim.js"
import React, { useState } from 'react';
import { db } from "../components/services/firestore"

import firebase from 'firebase/app';
import 'firebase/firestore';




function Authenticated(isAuthorized){
  (isAuthorized)? window.location.href="/signIn" : window.location.href="/commentPage";
}

function isAccount(){

}


function App() {  

  const { height, width } = useWindowDimensions();
  
  const {isSigned, setisSigned} = useState(0);

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

        <Button block size="lg" type="submit" onClick= {() => {db.collection("Users").add({
                                                                name: name,
                                                                email: email,
                                                                password: password
                                                                });}}>
          Sign up
        </Button>
 

      <button>
        Check your messages!
      </button>


    </div>
  );
}

export default App;
