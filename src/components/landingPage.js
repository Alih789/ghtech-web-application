import useWindowDimensions from "./screenDim.js"
import {Link } from "react-router-dom";

function App() {

    const { height, width } = useWindowDimensions();

    return (
    <div className="App" style={{ backgroundSize: "cover" ,backgroundImage: "url('https://sgl-assets.imgix.net/files/article_hero/yosemite-glacier-point-sunset-national-park-summer-activities-things-to-do-via-magazine-shutterstock_552174034.jpg?w=1440&h=720&crop=faces,edges')" }} >

      <header style = {{fontSize: 24,paddingTop:height *.05, paddingBottom: height *.1, width: width,flex: 1 }}>
        This is a header
      </header>  

        <button onClick = {() => window.location.href="/signIn"}>
          Go To Sign in
        </button>

    </div> );
}

export default App;