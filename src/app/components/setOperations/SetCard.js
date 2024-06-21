import "../styles/setCard.css";

// functional component card for set operations page
export default function SetCard(props) {
    // props for customization
  const color = props.color;
  const heading = props.heading;
  const symbol = props.symbol;
  const text = props.text;
  const bottom = props.bottom;
  const bottom2 = props.bottom2;
  

  return (
    <div
      className="setCard"
    //   inline styling
      style={{
        backgroundColor: color,
      }}
    >
      <div className="cardHead">
        <h4>{heading}</h4>
        <p>{symbol}</p>
      </div>
      <div
        className="cardText"
        style={{
          backgroundColor: { color },
        }}
      >
        <p>{text}</p>
      </div>
      <div className="cardBottom">
        <p>{bottom}</p>
        <p>{bottom2}</p>
      </div>
    </div>
  );
}
