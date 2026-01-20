import Yourichi from "./assets/yourichi.jpg";

function Card() {
  return (
    <div className="card">
      <img src={Yourichi} alt="profilePic" className="card-img" />
      <h2 className="card-title">Card Title</h2>
      <p className="card-description">This is a card component, And im making video.</p>
    </div>
  );
}

export default Card;
