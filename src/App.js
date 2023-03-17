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
        <AboutCard layout="left" content="We treat selling options as a market risk insurance policy. When someone sells an option, they are essentially agreeing to take on the risk of the underlying asset moving in a certain direction. In exchange for taking on this reisk, the seller receives a premium from the buyer of the option. This is similar to an insurance contract." header="we are a market risk insurance firm"></AboutCard>
        <AboutCard layout="right" content="Our team collectively has 20 year of.." header="built on extensive experience in financial insurance and reinsurance"></AboutCard>
        <AboutCard layout="left" content="Our team collectively has 20 year of.." header="our approach"></AboutCard>
      </div>
      <div className="Border"></div>
      <Footer></Footer>
    </div>
  );
  
}

export default App;
