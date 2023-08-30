import React from "react";

function Stock({ stock, buyStock }) {
  const handleBuyStock = () => {
    buyStock(stock);
  };

  return (
    <div onClick={handleBuyStock}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">
            {stock.ticker}: {stock.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stock;
