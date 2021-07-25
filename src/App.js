import './App.css';
import Header from "./Components/Header/Header.Component";

import LatestMatch from "./Components/LatestMatch/LatestMatch.Component";
import Navigation from "./Components/Navbar/Navigation.Component";
import FixturesAndResult from "./Components/FixturesAndResults/FixturesAndResult.Component";



function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <LatestMatch />
        <FixturesAndResult />
    </div>
  );
}

export default App;
