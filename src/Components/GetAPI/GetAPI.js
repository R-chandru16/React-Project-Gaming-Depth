import React, { useState, useEffect } from 'react';

export const GetAPI=()=>
{
  const [usdData, setUsdData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await response.json();
      setUsdData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {usdData ? (
        <div>
          <h1>USD Exchange Rates</h1>
          <p>Base: {usdData.base_currency_code}</p>
          <ul>
            {Object.keys(usdData.rates).map((currency) => (
              <li key={currency}>
                {currency}: {usdData.rates[currency]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

