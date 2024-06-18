import '../styles/landing.css';

export default function Landing(props) {

  if (props.topic === "landing") {
    return (
        <div className="landingDiv">
            <h1>Number Theory</h1>
            <p>Click one of the tabs on top to get started!</p>
        </div>
    );
  }
}
