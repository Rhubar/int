import '../styles/landing.css';

export default function Landing(props) {

  if (props.topic === "landing") {
    return (
        <div className="landingDiv">
          <div className="landingHead">
            <h1>Number Theory</h1>
        </div>
        <div className="landingExplain">
            <h4>Click one of the tabs on top to get started!</h4>
            <br />
            <p>This app will allow you to explore a few concepts of number theory in brief,
              with an interactive element for each of them. </p>
        </div>
        </div>
    );
  }
}
