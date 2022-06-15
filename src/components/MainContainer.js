import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function handleAddStock(clickedStock) {
    const stockInPortfolio = portfolio.find(
      (stock) => stock.id === clickedStock.id
    );
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, clickedStock]);
    }
  }

  function handleRemoveStock(stockToRemove) {
    setPortfolio((portfolio) =>
      portfolio.filter((stock) => stock.id !== stockToRemove.id)
    );
  }
  
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={handleAddStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolio}
            removeStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
