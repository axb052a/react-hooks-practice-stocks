import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock stock={stock} key={stock.id} buyStock={buyStock} />
      ))}
    </div>
  );
}

export default StockContainer;
