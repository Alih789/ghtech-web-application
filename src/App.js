import './App.css';
import { Router } from 'react-router-dom';
import Routes from './components/routes/index.js';
import history from './components/services/history'



function App() {

  return (
    <Router history={history}>
        <Routes/>
    </Router>
  );
}

export default App;
