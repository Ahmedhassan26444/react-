import React from "react";
import withApiData from "./HighOrder";   // matches HighOrder.jsx
import Coins from "./coins-temp";        // matches coins-temp.jsx
import Exchanges from "./Exchanges";     // matches Exchanges.jsx

function App() {
  const CoinsWithApi = withApiData(
    Coins,
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  const ExchangesWithApi = withApiData(
    Exchanges,
    "https://api.coingecko.com/api/v3/exchanges"
  );

  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <CoinsWithApi />
      <ExchangesWithApi />
    </div>
  );
}

export default App;
