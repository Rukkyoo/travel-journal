// Card.jsx
import Carousel from "./Carousel";
import data from "./data";

const Card = () => {
  const cards = data.map((item) => {
    return <Carousel key={item.id} {...item} />;
  });
  return (
    <div>
      <div className="card">{cards}</div>
    </div>
  );
};

export default Card;
