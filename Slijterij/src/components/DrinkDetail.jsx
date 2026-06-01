import '../DrinkDetail.css';

function DrinkDetail({ drink, onBack }) {
  return (
    <div className="drink-detail-overlay" onClick={onBack}>
      <div className="drink-detail" onClick={(e) => e.stopPropagation()}>
        <div className="detail-header">
          <h1>{drink.name}</h1>
          <button className="close-btn" onClick={onBack}>✕</button>
        </div>

        <div className="detail-image">
          <img src={drink.image} alt={drink.name} />
        </div>

        <div className="detail-content">
          <span className="detail-type">{drink.type}</span>

          <p className="detail-description">{drink.description}</p>

          <div className="detail-grid">
            <div className="detail-item">
              <div className="detail-icon location">📍</div>
              <div className="detail-text">
                <span className="detail-label">Land van herkomst</span>
                <span className="detail-value">{drink.country}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon percent">%</div>
              <div className="detail-text">
                <span className="detail-label">Alcoholpercentage</span>
                <span className="detail-value">{drink.alcoholPercentage}%</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon price">€</div>
              <div className="detail-text">
                <span className="detail-label">Prijs</span>
                <span className="detail-value">€{drink.price.toFixed(2)}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon category">🍷</div>
              <div className="detail-text">
                <span className="detail-label">Categorie</span>
                <span className="detail-value">{drink.type}</span>
              </div>
            </div>
          </div>

          <button className="back-btn" onClick={onBack}>
            ← Terug naar overzicht
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetail;
