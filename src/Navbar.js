import './Navbar.css';

function Navbar() {
  window.onscroll = function() {scrollFunction()};
  return (
    <div id="navbar" className="Navbar">
      <div className="Logo">hedgemore</div>
    </div>
  );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.top = "-10vh";
    }
}

export default Navbar;