import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Router>
      <Route exact path = "/" component = {Search} />
      <Route exact path = "/saved" component = {Saved} />
      </Router>
    </div>
  );
}

export default App;
