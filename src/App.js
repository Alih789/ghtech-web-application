import logo from './logo.svg';
import './App.css';
import background from './components/yosemite-national-park.jpg';
import useWindowDimensions from "./components/screenDim.js"


function App() {

  const { height, width } = useWindowDimensions();

  return (
    <div className="App" style={{ backgroundSize: "cover" ,backgroundImage: "url('https://sgl-assets.imgix.net/files/article_hero/yosemite-glacier-point-sunset-national-park-summer-activities-things-to-do-via-magazine-shutterstock_552174034.jpg?w=1440&h=720&crop=faces,edges')" }} >

      <header style = {{fontSize: 24,paddingTop:height *.05, paddingBottom: height *.1, width: width,flex: 1 }}>
        This is a header
      </header>
      
      <header style={{flex:1, fontSize: 24}}>
        This is another place holder
      </header>
    </div>
  );
}

export default App;
