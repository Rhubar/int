import "./styles/nav.css";

export default function Nav() {
  return (
    <div className="navDiv">
      <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
          <a href="/number">The Number Theory App</a>
        </li>
        <li>
          <a href="/set">Set Operations(under construction)</a>
        </li>
      </ul>
    </div>
  );
}
