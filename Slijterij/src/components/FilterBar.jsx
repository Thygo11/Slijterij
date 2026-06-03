import '../FilterBar.css';

function FilterBar({ searchTerm, onSearchChange, drinkTypes, selectedType, onTypeChange, countries, selectedCountry, onCountryChange, priceRange, onPriceChange, hasActiveFilters, onClearFilters }) {
  return (
    <div className="filter-bar">
      <div className="filter-container">
     
        <div className="search-box">
          <input
            type="text"
            placeholder="Zoek op naam van drank..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        
        <div className="filters-row">
          <div className="filter-group">
            <label>Type drank</label>
            <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)} className="filter-select">
              <option value="">Alle types</option>
              {drinkTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Land van herkomst</label>
            <select value={selectedCountry} onChange={(e) => onCountryChange(e.target.value)} className="filter-select">
              <option value="">Alle landen</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="filter-group price-group">
            <label>Prijsbereik: €{priceRange[0]} - €{priceRange[1]}</label>
            <div className="price-slider">
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[0]}
                onChange={(e) => {
                  const newMin = Math.min(Number(e.target.value), priceRange[1]);
                  onPriceChange([newMin, priceRange[1]]);
                }}
                className="slider-input min"
              />
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[1]}
                onChange={(e) => {
                  const newMax = Math.max(Number(e.target.value), priceRange[0]);
                  onPriceChange([priceRange[0], newMax]);
                }}
                className="slider-input max"
              />
            </div>
          </div>
        </div>

       
        {hasActiveFilters  && (
          <div className="active-filters">
            <span className="filters-label">Actieve filters:</span>
            {selectedType && (
              <span className="filter-badge">
                Type: {selectedType}
                <button onClick={() => onTypeChange('')} className="badge-close">✕</button>
              </span>
            )}
            {selectedCountry && (
              <span className="filter-badge">
                Land: {selectedCountry}
                <button onClick={() => onCountryChange('')} className="badge-close">✕</button>
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 50) && (
              <span className="filter-badge">
                Prijs: €{priceRange[0]}-€{priceRange[1]}
                <button onClick={() => onPriceChange([0, 50])} className="badge-close">✕</button>
              </span>
            )}
              
            {searchTerm && (
              <span className="filter-badge">
                Zoek: {searchTerm}
                <button onClick={() => onSearchChange('')} className="badge-close">✕</button>
              </span>
            )}
            <button onClick={onClearFilters} className="clear-all">Alles wissen</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
