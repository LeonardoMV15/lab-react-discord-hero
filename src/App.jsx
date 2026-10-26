import "./App.css";

const logo =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png";
const navIcon =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png";
const draw =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav className=" navBar">
        <img className="logoStyles" src={logo} alt="Discord logo" />
        <img src={navIcon} alt="" />
      </nav>

      <div className="mainDiv">
        <h1 >IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaiming group, or a
          worldwide art community. Where just you and a handful of firends can
          spend time together. Aplace that makes it easy to talk every day and
          hang out more often.
        </p>

        <button className="whiteButton">Download for Mac</button>
        <button className="blackButton">Open Discord in your brownser</button>

      </div>

      <img className="draw" src={draw} alt="" />
    </div>
  );
}

export default App;
