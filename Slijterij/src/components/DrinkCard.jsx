import '../DrinkCard.css';

function DrinkCard({ drink, onClick }) {
  return (
    <div className="drink-card" onClick={onClick}>
      <div className="drink-image-container">
        <img
          src={drink.image}
          alt={drink.name}
          className="drink-image"
        />
      </div>

      <div className="drink-content">
        <h3 className="drink-name">{drink.name}</h3>

        <span className="drink-type">{drink.type}</span>

        <p className="drink-info">
          📍 {drink.country}
        </p>

        <p className="drink-info">
          🍷 {drink.alcoholPercentage}% alcohol
        </p>

        <div className="drink-price">
          €{drink.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default DrinkCard;