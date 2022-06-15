import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStock }) {
  
  const stocksList  = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={addStock} />
  ));
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
