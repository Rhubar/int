import "./styles/nav.css";

export default function Nav() {
  return (
    <div className="navDiv">
      <ul>
        {/* dropdown for mobile */}
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">Menu</a>
        <div class="dropdown-content">
          <a href="/">Home</a>
          <a href="/number">Number Theory</a>
          <a href="/set">Set Operations</a>
          <a href="/about">About</a>
        </div>
        </li>
        <div className="bigScreen">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
          <a href="/number">The Number Theory App</a>
        </li>
        <li>
          <a href="/set">Set Operations</a>
        </li>
        <li className="aboutLink">
          <a href="/about">About</a>
        </li>
      </div>
      </ul>
    </div>
  );
}
