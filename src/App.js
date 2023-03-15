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
        <div className="About-card-left">
          
        </div>
      </div>
      <div className="Border"></div>
      <Footer></Footer>
    </div>
  );
  
}

export default App;
