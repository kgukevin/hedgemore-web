import AboutCard from './AboutCard';
import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <div className="Logo">hedgemore</div>
        <div> Finding value beyond the hedge. </div>
      </header>
      <div className="Border"></div>
      <div className="Main">
        <div>
          <h1>about us</h1>
        </div>
        <AboutCard layout="left" content="this is content" header="we are a market risk insurance firm"></AboutCard>
        <AboutCard layout="right" content="this is content" header="we are a market risk insurance firm"></AboutCard>
      </div>
      <div className="Border"></div>
      <Footer></Footer>
    </div>
  );
  
}

export default App;
