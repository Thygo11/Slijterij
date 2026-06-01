import { useState } from 'react';
import DrinkCard from './components/DrinkCard';
import FilterBar from './components/FilterBar';
import DrinkDetail from './components/DrinkDetail';
import drinkData from './data/data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedDrink, setSelectedDrink] = useState(null);


  const drinkTypes = [...new Set(drinkData.map(drink => drink.type))];
  const countries = [...new Set(drinkData.map(drink => drink.country))];

  
  const filteredDrinks = drinkData.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || drink.type === selectedType;
    const matchesCountry = !selectedCountry || drink.country === selectedCountry;
    const matchesPrice = drink.price >= priceRange[0] && drink.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesCountry && matchesPrice;
  });

  const hasActiveFilters = searchTerm || selectedType || selectedCountry || priceRange[0] > 0 || priceRange[1] < 50;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <span className="header-icon">🍷</span>
            <h1>Dranken Catalogus</h1>
          </div>
          <div className="header-right">
            <span className="drink-count">{drinkData.length} dranken</span>
          </div>
        </div>
      </header>

      <div className="app-main">
        <div className="hero-section">
          <h2>Ontdek onze collectie</h2>
          <p>Verken ons uitgebreide assortiment aan bieren, wijnen, sterke dranken en likeuren uit de hele wereld</p>
        </div>

        <FilterBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          drinkTypes={drinkTypes}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          countries={countries}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={() => {
            setSearchTerm('');
            setSelectedType('');
            setSelectedCountry('');
            setPriceRange([0, 50]);
          }}
        />

        {selectedDrink ? (
          <DrinkDetail 
            drink={selectedDrink}
            onBack={() => setSelectedDrink(null)}
          />
        ) : (
          <>
            <div className="results-info">
              <span className="results-count">{filteredDrinks.length} resultaten gevonden</span>
            </div>
            <div className="drinks-grid">
              {filteredDrinks.map(drink => (
                <DrinkCard 
                  key={drink.id}
                  drink={drink}
                  onClick={() => setSelectedDrink(drink)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
