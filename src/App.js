import './App.css';
import GlobalStyle from "./assets/styles/global";
import MapView from "./components/MapView";
import { BrowserRouter as Router } from "react-router-dom";

// #06bcee cyan

function App() {
  return (
    <GlobalStyle className="App">
      
        <Router>
          <MapView/>
        </Router>
   
    </GlobalStyle>
  );
}

export default App;
