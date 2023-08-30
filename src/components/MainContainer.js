import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => {
        setStocks(data);
        setFilteredStocks(data);
      });
  }, []);

  const buyStock = (stock) => {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const sellStock = (stock) => {
    const updatedPortfolio = portfolio.filter((s) => s.id !== stock.id);
    setPortfolio(updatedPortfolio);
  };

  const handleSortChange = (sortType) => {
    let sortedStocks = [...filteredStocks];
    if (sortType === "Alphabetically") {
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortType === "Price") {
      sortedStocks.sort((a, b) => a.price - b.price);
    }
    setFilteredStocks(sortedStocks);
  };

  const handleFilterChange = (filterType) => {
    if (filterType === "All") {
      setFilteredStocks(stocks);
    } else {
      const filtered = stocks.filter((stock) => stock.type === filterType);
      setFilteredStocks(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
