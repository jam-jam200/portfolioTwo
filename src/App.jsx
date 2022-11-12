import "./App.css";
import {
  NavBar,
  Nav,
  Hero,
  Service,
  Experience,
  Works,
  Portfolio,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Nav />
      <Hero />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
